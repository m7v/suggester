import './Loader.css';
import React from 'react';
import defaultCard from './assets/default-card.png';

const Loader = () => (
    <div className="Loader la-dark la-2x">
        <div style={{backgroundImage: `url(${defaultCard})`}} />
    </div>
);

export default Loader;
