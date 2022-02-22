import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import authService from "../../../../services/auth.service";
import TitlePage from '../../../../components/UI/TitlePage/TitlePage';
import InputLabel from '../../../../components/UI/InputLabel/InputLabel';
import Input from '../../../../components/UI/Input/Input';
import { useRouter } from "next/router";
import withAuthAdmin from "../../../../HOC/withAuthAdmin";

const Index = () => {
    const [movie, setMovie] = useState({});
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [categories, SetAllCategory] = useState([]);

    useEffect(() => {
        const id = router.query.id;
        authService.getMovie(id)
            .then(data => {
                setMovie(data)
            })
            .catch(err => console.log(err));
        authService.getAllCategories()
            .then(data => {
                SetAllCategory(data)
            })
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = router.query.id;
        const token = localStorage.getItem('token');
        authService.updateMovie(movie, id, token)
        .then((data) => {
            if (data.message) {
                // setError(true);
                // setErrorMessage(data.message);
                return false;
            }
            router.push("/backoffice/movies");
        })
        .catch((err) => {
            setError(true);
            setErrorMessage(err.message)
        });
    };
    return (
        <div className={styles.movies}>
            <TitlePage title='Modification du film'></TitlePage>
            {/* {error ? {errorMessage} : ""} */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <InputLabel type="text" required="required" label="Titre"  onChange={(e) => { setMovie({ ...movie, title: e.target.value }) }} value={movie.title} />
                <InputLabel type="text" required="required" label="Description" onChange={(e) => { setMovie({ ...movie, description: e.target.value }) }} value={movie.description} />
                <InputLabel type="text" required="required" label="Durée" onChange={(e) => { setMovie({ ...movie, duration: e.target.value }) }} value={movie.duration} />
                <InputLabel type="text" required="required" label="Date" onChange={(e) => { setMovie({ ...movie, date: e.target.value }) }} value={movie.date} />
                <InputLabel type="text" label="Image" onChange={(e) => { setMovie({ ...movie, img: e.target.value }) }} value={movie.img} />
                <InputLabel type="text" label="Video" onChange={(e) => { setMovie({ ...movie, video: e.target.value }) }} value={movie.video} />
                <h3>Catégories :</h3>
                {
                    categories.map((category) => (
                        <div key={category._id}>
                            { movie.categories == category._id ? <input type="checkbox" value={category._id} onChange={(e) => { setMovie({ ...movie, categories: e.target.value }) }} checked /> : <input type="checkbox" value={category._id} onChange={(e) => { setMovie({ ...movie, categories: e.target.value }) }} /> }
                            <label>{category.title}</label>
                        </div>
                    ) )
                }
                <Input type="submit" value="Enregistrer" className="btn btn-red" />
            </form>
        </div>
    );
};

export default withAuthAdmin(Index);