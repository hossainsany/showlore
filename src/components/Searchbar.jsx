import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import style from './Searchbar.module.scss';
import { useState } from 'react';

const Searchbar = () => {
    const [btnClicked, setBtnCliked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleClick = () => {
        btnClicked ? setBtnCliked(false) : setBtnCliked(true);
    };

    return (
        <div className={style.searchbar}>
            <button className={style.searchBtn} onClick={handleClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <form className={btnClicked ? `${style.form} ${style.show}` : `${style.form}`} onSubmit={handleSubmit}>
                <input type='text' name='search' placeholder='Search' className={style.searchInput} />
                <button type='submit' className={style.btn}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    );
};

export default Searchbar;
