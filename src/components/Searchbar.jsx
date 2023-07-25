import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './Searchbar.css';
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
        <div className='searchbar'>
            <button className='search-btn' onClick={handleClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <form className={btnClicked ? `searchbar-form show` : `searchbar-form`} onSubmit={handleSubmit}>
                <input type='text' name='search' placeholder='Search' />
                <button type='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    );
};

export default Searchbar;
