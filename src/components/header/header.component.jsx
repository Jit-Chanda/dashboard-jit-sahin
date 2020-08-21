import React from 'react';
import './header.styles.css';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';

const Header = () => {
    return(
        <div className='header'>
            <div className='header__left'>
                <DirectionsBoatIcon />
                <h4 className='header__text'>KOLKATA PORT TRUST</h4>
            </div>
        </div>
    )
}

export default Header;