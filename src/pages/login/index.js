import React, {useState} from 'react';
import InputLabel from '../../components/UI/InputLabel/InputLabel';
import styles from './index.module.scss';
import { useRouter } from "next/router";
import authService from "../../services/auth.service";
import Input from '../../components/UI/Input/Input';
import Link from 'next/link';
import withAuth from '../../HOC/withAuth';


const Index = () => {
    const [user, setUser] = useState({});
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(user)
        .then((data) => {
            if (data.message) {
                setError(true);
                setErrorMessage(data.message);
                return false;
            }
            localStorage.setItem("token", data.token);
            router.push("/browser");
        })
        .catch((err) => {
            setError(true);
            setErrorMessage(err.message)
        });
    };

    return (
        <div>
            <div className={styles.login__body}>
                {error ? errorMessage : ""}
                <div className={styles.login__content}>
                    <h1>{`S'identifier`}</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <InputLabel type="email" required="required" label="E-mail ou numéro de téléphone"  onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                        <InputLabel type="password" required="required" label="Mot de passe" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                        <Input type="submit" value="S'identifier" className="btn btn-red" />
                    </form>
                    <div className={styles.signup}>
                        <p>
                            Première visite sur Netflix ? &nbsp;
                            <Link href='/'><a>Inscrivez-vous</a></Link>.
                        </p>
                    </div>
                    <div className={styles.recaptcha}>
                        <p>
                        Cette page est protégée par Google reCAPTCHA pour nous assurer que vous {`n'êtes`} pas un robot. <br />
                            <Link href='/login'><a>En savoir plus.</a></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(Index);