import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import FetchMovies from './FetchMovies';
import './MoviesSection.css';

const MoviesSection = ({ fetchURL, name, styleClass }) => {
    return (
        <div className='movies-section'>
            <h2 className='section-title'>{name}</h2>
            <div className={`movie-row ${styleClass}`}>
                <div className='slider-handle left'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <FetchMovies fetchURL={fetchURL} name={name} />
                <div className='slider-handle right'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
};

export default MoviesSection;
