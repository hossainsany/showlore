import { useEffect, useState } from 'react';
import style from './Movie.module.scss';

const Movie = ({ title, poster, releaseDate, type }) => {
    const [releaseYear, setReleaseYear] = useState('');

    useEffect(() => {
        const year = () => {
            releaseDate ? setReleaseYear(releaseDate.slice(0, 4)) : setReleaseYear('');
        };

        year();
    }, []);

    return (
        <div className={`${style.movie} movie slider-item`}>
            <div className={style.text}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.description}>{releaseYear}</p>
                <p>{type}</p>
            </div>
            <div className={style.poster}>
                <img src={poster} alt='poster' />
            </div>
        </div>
    );
};

export default Movie;
