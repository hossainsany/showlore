import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import style from './Warning.module.scss';

const Warning = () => {
    const [btnClicked, setBtnClicked] = useState(false);

    return (
        <div className={btnClicked ? `${style.disclaimer} ${style.hidden}` : `${style.disclaimer} `}>
            <p>
                This website is currently in the development phase, and as such, there may be instances where certain features may not perform as
                intended.
            </p>
            <button className={style.btn} onClick={() => (btnClicked ? setBtnClicked(false) : setBtnClicked(true))}>
                <FontAwesomeIcon icon={faX} />
            </button>
        </div>
    );
};

export default Warning;
