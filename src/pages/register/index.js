import React, {useState} from 'react';
import Input from '../../components/UI/Input/Input';
import styles from './index.module.scss';
import authService from "../../services/auth.service";
import InputLabel from '../../components/UI/InputLabel/InputLabel';
import TitlePage from '../../components/UI/TitlePage/TitlePage';
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../services/stripe.service";
import apiConfigs from "../../../next.config.js";
import Alert from '../../components/UI/Alert/Alert';

const stripePromise = loadStripe(apiConfigs.env.STRIPE_PK);

const Index = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [activeStandard, setActiveStandard] = useState(false);
    const [activePremium, setActivePremium] = useState(false);

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

    const chooseStandard = () => {
        setUser({ ...user, abonnement: "Standard" });
        setActiveStandard(true);
        setActivePremium(false);
    };

    const choosePremium = () => {
        setUser({ ...user, abonnement: "Premium" });
        setActivePremium(true);
        setActiveStandard(false);
    };

    const handleConfirmation = async () => {
        const token = localStorage.getItem('token');
        const total = 0;
        console.log(user.abonnement);
        if(user.abonnement == "Standard") {
            total = 30;
        } else if (user.abonnement == "Premium") {
            total = 60;
        } else if (user.abonnement == undefined) {
            setError(true);
            setErrorMessage("Veuillez sélectionner un abonnement pour continuer");
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
                <div className={styles.register__content}>
                    <TitlePage title="Créer votre compte"></TitlePage>
                    {error ? <Alert text={errorMessage} className='alert alert-danger'></Alert> : ""}
                    <form className={styles.register__form} onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.register__input}>
                            <InputLabel type="text" placeholder="Prénom" required="required" label="Prénom"  onChange={(e) => { setUser({ ...user, firstName: e.target.value }) }} />
                            <InputLabel type="text" placeholder="Nom" required="required" label="Nom"  onChange={(e) => { setUser({ ...user, lastName: e.target.value }) }} />
                            <InputLabel type="email" placeholder="Adresse e-mail" required="required" label="E-mail"  onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                            <InputLabel type="password" placeholder="Mot de passe" required="required" label="Mot de passe"  onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                        </div>
                        <Alert text="Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre, un caractère spécial et doit comporter minimum 6 caractères" className='alert text-center alert-warning'></Alert>
                        <table className={styles.table}>
                            <tr>
                                <th></th>
                                <td className={activeStandard ? styles.is_active : null}>
                                    <span className={styles.abo} onClick={() =>  chooseStandard() }>
                                        Standard
                                    </span>
                                </td>
                                <td className={activePremium ? styles.is_active : null}>
                                    <span className={styles.abo} onClick={() => choosePremium() }>
                                        Premium
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>Abonnement mensuel</th>
                                <td className={activeStandard ? styles.red : null}>30€</td>
                                <td className={activePremium ? styles.red : null}>60€</td>
                            </tr>
                            <tr>
                                <th>Qualité vidéo</th>
                                <td className={activeStandard ? styles.red : null}>Meilleure</td>
                                <td className={activePremium ? styles.red : null}>Optimale</td>
                            </tr>
                            <tr>
                                <th>Résolution</th>
                                <td className={activeStandard ? styles.red : null}>1080p</td>
                                <td className={activePremium ? styles.red : null}>4K+HDR</td>
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