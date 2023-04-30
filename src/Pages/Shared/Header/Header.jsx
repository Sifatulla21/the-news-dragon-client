import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className="text-center pt-5 pb-5">
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favor</p>
                <h3>{moment().format('dddd, MMMM D, YYYY')}</h3>
            </div>
        </div>
    );
};

export default Header;