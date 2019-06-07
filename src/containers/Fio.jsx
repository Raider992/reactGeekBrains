import React from 'react';

import CurrentDate from '../components/CurrentDate'

import fio_styles from './fio.module.css'

const Fio = () => {
    return (
        <div className={fio_styles.fio}>
            <h3>Любарский Андрей Владимирович</h3>
            <CurrentDate />
        </div>
    );
};

export default Fio;
