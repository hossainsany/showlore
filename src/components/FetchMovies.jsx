import { useEffect, useState } from 'react';
import fetchData from '../utils/fetch';
import Movie from './Movie';

const FetchMovies = ({ fetchURL, name }) => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const { results: data } = await fetchData(fetchURL);
            setMovieList(data);
        };

        fetchTrendingMovies();
    }, []);

    return (
        <>
            {movieList.map((movie) => (
                <Movie
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    type={movie.media_type}
                    poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    releaseDate={movie.release_date}
                    name={name}
                />
            ))}
        </>
    );
};

export default FetchMovies;
