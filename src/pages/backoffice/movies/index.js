import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import authService from "../../../services/auth.service";
import {AiOutlineEdit} from 'react-icons/ai'
import Link from 'next/link';
import TitlePage from '../../../components/UI/TitlePage/TitlePage';
import withAuthAdmin from '../../../HOC/withAuthAdmin';

const Index = () => {
    const [movies, SetAllMovie] = useState([]);

    useEffect(() => {
        authService.getAllMovies()
            .then(data => {
                SetAllMovie(data)
            })
            .catch(err => console.log(err));
    },[]);

    return (
        <div className={styles.movies}>
            <TitlePage title='Liste des Films'></TitlePage>
            <Link href='/backoffice/movies/add'>
                <a className='btn btn-red'>Ajouter un film</a>
            </Link>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Durée</th>
                        <th>Date de sortie</th>
                        <th>Catégories</th>
                        <th>Modifier</th>
                    </tr>
                </thead>
                <tbody>
                {
                    movies.map((movie) => (
                        <tr key={movie._id}>
                            <td data-column="Titre">{movie.title}</td>
                            <td data-column="Description">{movie.description}</td>
                            <td data-column="Image"><img src={movie.img} /></td>
                            <td data-column="Durée">{movie.duration}</td>
                            <td data-column="Date">{movie.date}</td>
                            <td data-column="Catégorie">{movie.categories}</td>
                            <td>
                                <Link href={`/backoffice/movies/${movie._id}`}>
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