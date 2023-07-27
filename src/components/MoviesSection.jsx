import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import FetchMovies from './FetchMovies';

import style from './MoviesSection.module.scss';

const MoviesSection = ({ fetchURL, name, styleClass }) => {
    const [sliderScroll, setSliderScroll] = useState(0);
    const minScroll = 0;
    const maxScroll = 3;

    const handlePrev = () => {
        if (sliderScroll > minScroll) {
            setSliderScroll(sliderScroll - 1);
        }
    };

    const handleNext = () => {
        if (sliderScroll < maxScroll) {
            setSliderScroll(sliderScroll + 1);
        }
    };

    return (
        <div className={style.movieSection}>
            <h2 className={style.sectionTitle}>{name}</h2>
            <button
                className={`${style.sliderHandle} ${style.left}`}
                onClick={handlePrev}
                style={{ display: sliderScroll === minScroll ? 'none' : 'block' }}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
                className={`${style.sliderHandle} ${style.right}`}
                onClick={handleNext}
                style={{ display: sliderScroll === maxScroll ? 'none' : 'block' }}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <div className={`${style.movieRow} ${styleClass} slider-container`} style={{ transform: `translate(-${sliderScroll * 93}%)` }}>
                <FetchMovies fetchURL={fetchURL} name={name} />
            </div>
        </div>
    );
};

export default MoviesSection;
