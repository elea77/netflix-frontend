import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import authService from "../../../services/auth.service";
import {AiOutlineEdit} from 'react-icons/ai'
import TitlePage from '../../../components/UI/TitlePage/TitlePage';
import Link from 'next/link';
import withAuthAdmin from '../../../HOC/withAuthAdmin';

const Index = () => {
    const [categories, SetAllCategory] = useState([]);

    useEffect(() => {
        authService.getAllCategories()
            .then(data => {
                SetAllCategory(data)
            })
            .catch(err => console.log(err));
    },[]);

    return (
        <div className={styles.categories}>
            <TitlePage title='Liste des Catégories'></TitlePage>
            <Link href='/backoffice/categories/add'>
                <a className='btn btn-red'>Ajouter une catégorie</a>
            </Link>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Modifier</th>
                    </tr>
                </thead>
                <tbody>
                {
                    categories.map((category) => (
                        <tr key={category._id}>
                            <td data-column="Titre">{category.title}</td>
                            <td>
                                <Link href={`/backoffice/categories/${category._id}`}>
                                    <a><AiOutlineEdit /></a>
                                </Link>
                            </td>
                        </tr>
                    ) )
                }
                </tbody>
            </table>
        </div>
    );
};

export default withAuthAdmin(Index);