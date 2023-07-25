import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './Warning.css';

const Warning = () => {
    const [btnClicked, setBtnClicked] = useState(false);

    return (
        <div className={btnClicked ? `disclaimer hidden` : `disclaimer`}>
            <p>
                The website is currently in the development phase, and as such, there may be instances where certain features may not perform as
                intended.
            </p>
            <button onClick={() => (btnClicked ? setBtnClicked(false) : setBtnClicked(true))}>
                <FontAwesomeIcon icon={faX} />
            </button>
        </div>
    );
};

export default Warning;
