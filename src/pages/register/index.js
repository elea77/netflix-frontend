import React, {useState} from 'react';
import Input from '../../components/UI/Input/Input';
import styles from './index.module.scss';
import { useRouter } from "next/router";
import authService from "../../services/auth.service";
import InputLabel from '../../components/UI/InputLabel/InputLabel';
import TitlePage from '../../components/UI/TitlePage/TitlePage';
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../services/stripe.service";
import apiConfigs from "../../../next.config.js";

// const stripePromise = loadStripe(apiConfigs.env.STRIPE_PK);
const stripePromise = loadStripe("pk_test_51IYAwmJ5UFJGtqNY47wrtVEcNKKVkbiO0TzfR5kQ9Sfle8LjCPvQXzhuWH7PKoRaWQNP3oC2mVBhHPqkUn3n4BId00YcpQNq2k");

const Index = () => {
    const [user, setUser] = useState({});
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.register(user)
        .then(data => {
            if (data.message) {
                setError(true);
                setErrorMessage(data.message);
                return false;
            }
            localStorage.setItem("token", data.token);
            handleConfirmation();
        })
        .catch((err) => {
            setError(true);
            setErrorMessage(err.message)
        });
    };


    const handleConfirmation = async () => {
        const token = localStorage.getItem('token');
        const total = 0;
        if(user.abonnement == "Standard") {
            total = 30;
        } else if (user.abonnement == "Premium") {
            total = 60;
        }

        const payload = {
            total: total,
            abonnement: user.abonnement
        }

        try {
            const stripe = await stripePromise;
            const response = await stripeService.createSession(token, payload);
            await stripe.redirectToCheckout({
                sessionId: response.id,
            });
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className={styles.register}>
            <div className={styles.register__body}>
                {error ? errorMessage : ""}
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
                                    <span className={styles.abo} onClick={(e) => { setUser({ ...user, abonnement: "Standard" }) }}>
                                        Standard
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.abo} onClick={(e) => { setUser({ ...user, abonnement: "Premium" }) }}>
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

                        <Input type="submit" value="Créer mon compte" className="btn btn-red" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Index;