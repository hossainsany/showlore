import './Movie.css';

const Movie = ({ title, overview, poster }) => {
    return (
        <div className='movie'>
            <div className='movie-text'>
                <h2 className='movie-title'>{title}</h2>
                <p className='movie-description'>{overview}</p>
            </div>
            <div className='movie-poster'>
                <img src={poster} alt='poster' />
            </div>
        </div>
    );
};

export default Movie;
