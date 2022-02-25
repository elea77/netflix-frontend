import React, {useEffect, useState} from 'react';
import withAuth from '../../HOC/withAuth';
import styles from './index.module.scss';
import authService from "../../services/auth.service";

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
            <p>FirstName: {user && user.firstName}</p>
            <p>LastName: {user && user.lastName}</p>
            <p>Email: {user && user.email}</p>
        </div>
    );
};

export default withAuth(Index);