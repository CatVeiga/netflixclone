/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Header.css';

export default ({black}) => {

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo_netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-1289-360.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfzF0jDEyIDMIDllHkqhvicWlZC7P8rzWjtfRGasxpJ_44a-snOxTjfnfsMIkrxhTLsSOtEj-NPwaEbxRnw2cuRU6bZi.png?r=071" alt="userphoto" />
                </a>
            </div>
        </header>
    );
}