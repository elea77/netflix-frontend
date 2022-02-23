import React, {useState} from 'react';
import Input from '../components/UI/Input/Input';
import styles from './index.module.scss';
import { useRouter } from "next/router";
import authService from "../services/auth.service";
import Link from 'next/link';
import withoutAuth from '../HOC/withoutAuth';

const Index = () => {
    const [user, setUser] = useState({});
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = user.email;
        authService.getUserEmail(email)
        .then(data => {
            if(data.message == true) {
                router.push("/login");
            } else {
                router.push("/register");
            }
        })
        .catch(err => console.log(err));
    };

    return (
        <div>
            <div className={styles.register__body}>
                <div className={styles.register__content}>
                    <h1 className='text-center'>Films, séries TV et bien <br /> plus en illimité.</h1>
                    <h2 className='text-center'>Où que vous soyez. Annulez à tout moment.</h2>
                    <p className='text-center'>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
                    <form className={styles.register__form} onSubmit={(e) => handleSubmit(e)}>
                        <Input type="email" placeholder="Adresse e-mail" required="required" label="E-mail ou numéro de téléphone"  onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                        <Input type="submit" value="Commencer" className="btn btn-red" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default withoutAuth(Index);