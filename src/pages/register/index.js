import React, {useState} from 'react';
import Input from '../../components/UI/Input/Input';
import styles from './index.module.scss';
import { useRouter } from "next/router";
import authService from "../../services/auth.service";
import Link from 'next/link';
import InputLabel from '../../components/UI/InputLabel/InputLabel';
import TitlePage from '../../components/UI/TitlePage/TitlePage';
import withoutAuth from '../../HOC/withoutAuth';

const Index = () => {
    const [user, setUser] = useState({});
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = user.email;
        console.log(email);
        authService.getUserEmail(email)
        .then(data => {
            console.log(data.message);
        })
        .catch(err => console.log(err));
    };

    return (
        <div className={styles.register}>
            <div className={styles.register__body}>
                {error ? {errorMessage} : ""}
                <div className={styles.register__content}>
                    <TitlePage title="Créer votre compte"></TitlePage>
                    <form className={styles.register__form} onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.register__input}>
                            <InputLabel type="text" placeholder="Prénom" required="required" label="Prénom"  onChange={(e) => { setUser({ ...user, firstName: e.target.value }) }} />
                            <InputLabel type="text" placeholder="Nom" required="required" label="Nom"  onChange={(e) => { setUser({ ...user, lastName: e.target.value }) }} />
                            <InputLabel type="email" placeholder="Adresse e-mail" required="required" label="E-mail"  onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                            <InputLabel type="password" placeholder="Mot de passe" required="required" label="Mot de passe"  onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                        </div>
                        <table className={styles.table}>
                            <tr>
                                <th></th>
                                <td>
                                    <span className={styles.abo}>
                                        Standard
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.abo}>
                                        Premium
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Abonnement mensuel</th>
                                <td>30€</td>
                                <td>60€</td>
                            </tr>
                            <tr>
                                <th>Qualité vidéo</th>
                                <td>Meilleure</td>
                                <td>Optimale</td>
                            </tr>
                            <tr>
                                <th>Résolution</th>
                                <td>1080p</td>
                                <td>4K+HDR</td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default withoutAuth(Index);