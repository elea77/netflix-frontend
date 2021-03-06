import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import authService from "../../../../services/auth.service";
import TitlePage from '../../../../components/UI/TitlePage/TitlePage';
import InputLabel from '../../../../components/UI/InputLabel/InputLabel';
import Input from '../../../../components/UI/Input/Input';
import { useRouter } from "next/router";
import withAuthAdmin from "../../../../HOC/withAuthAdmin";
import Alert from '../../../../components/UI/Alert/Alert';

const Index = () => {
    const [movie, setMovie] = useState({});
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [categories, SetAllCategory] = useState([]);

    const [test, setTest] = useState([]);

    useEffect(() => {
        authService.getAllCategories()
            .then(data => {
                SetAllCategory(data)
            })
            .catch(err => console.log(err));
    },[]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        console.log(movie);
        authService.createMovie(movie, token)
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
            {error ? <Alert text={errorMessage} className='alert alert-danger'></Alert> : ""}
            <form onSubmit={(e) => handleSubmit(e)}>
                <InputLabel type="text" required="required" label="Titre"  onChange={(e) => { setMovie({ ...movie, title: e.target.value }) }} />
                <InputLabel type="text" required="required" label="Description" onChange={(e) => { setMovie({ ...movie, description: e.target.value }) }} />
                <InputLabel type="text" required="required" label="Dur??e" onChange={(e) => { setMovie({ ...movie, duration: e.target.value }) }} />
                <InputLabel type="text" required="required" label="Date" onChange={(e) => { setMovie({ ...movie, date: e.target.value }) }} />
                <InputLabel type="text" label="Image" onChange={(e) => { setMovie({ ...movie, img: e.target.value }) }} value={movie.img} />
                <InputLabel type="text" label="Video" onChange={(e) => { setMovie({ ...movie, video: e.target.value }) }} value={movie.video} />
                {
                    categories.map((category) => (
                        <div key={category._id}>
                            <input type="checkbox" value={category._id} onChange={(e) => { setMovie({ ...movie, categories: e.target.value }) }} />
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