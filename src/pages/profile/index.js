import React, {useEffect, useState} from 'react';
import withAuth from '../../HOC/withAuth';
import styles from './index.module.scss';
import authService from "../../services/auth.service";
import TitlePage from '../../components/UI/TitlePage/TitlePage';

const Index = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');
        authService.getUser(token)
            .then(data => {
                setUser(data);
            })
            .catch(err => console.log(err));
    },[]);


    return (
        <div className={styles.profile}>
            <TitlePage title='Mon compte'></TitlePage><br></br>
            <h2>Bonjour {user && user.firstName} {user && user.lastName},</h2><br />
            <h3>Vos informations :</h3>
            <p>Adresse mail: <b>{user && user.email}</b></p>
            <p>Abonnement en cours: <b>{user && user.abonnement}</b></p>
        </div>
    );
};

export default withAuth(Index);