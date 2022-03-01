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
    const [category, setCategory] = useState({});
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const id = router.query.id;
        authService.getCategory(id)
            .then(data => {
                setCategory(data)
            })
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = router.query.id;
        const token = localStorage.getItem('token');
        authService.updateCategory(category, id, token)
        .then((data) => {
            if (data.message) {
                // setError(true);
                // setErrorMessage(data.message);
                return false;
            }
            router.push("/backoffice/categories");
        })
        .catch((err) => {
            setError(true);
            setErrorMessage(err.message)
        });
    };
    return (
        <div className={styles.categorys}>
            <TitlePage title='Modification de la catégorie'></TitlePage>
            {error ? <Alert text={errorMessage} className='alert alert-danger'></Alert> : ""}
            <form onSubmit={(e) => handleSubmit(e)}>
                <InputLabel type="text" required="required" label="Titre"  onChange={(e) => { setCategory({ ...category, title: e.target.value }) }} value={category.title} />
                <Input type="submit" value="Enregistrer" className="btn btn-red" />
            </form>
        </div>
    );
};

export default withAuthAdmin(Index);