import './ErrorPage.css';
import React from 'react';
import random from 'lodash/random';

const getCover = () => {
    const bg = [
        'https://i.pinimg.com/originals/13/61/5c/13615cd529ea3560738aaaac5f71bfe8.jpg',
        'http://media.wizards.com/2017/images/daily/c4rd4r7_gvHRsZRnRk.jpg',
        'https://img00.deviantart.net/1ad5/i/2017/194/e/3/mtg__oblivion_by_sidharthchaturvedi-dbg5c5z.jpg',
        'http://jw3dm7to61amrhh2e53wk79i.wpengine.netdna-cdn.com/wp-content/uploads/2017/11/FNMModernMain.jpg'
    ];

    return bg[random(0, bg.length - 1)];
};

const ErrorPage = () => (
    <div className="ErrorPage__errorWrapper">
        <div className="ErrorPage__errorText">Something went wrong</div>
        <div className="ErrorPage__error" />
        <div
            className="ErrorPage__img"
            style={{backgroundImage: `url(${getCover()})`}}
        />
    </div>
);

export default ErrorPage;
