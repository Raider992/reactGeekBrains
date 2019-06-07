import React from 'react';

import extra_styles from './extra.module.css'

class CurrentDate extends Component {

    onButtonClick = (e) => {
        e.preventDefault();
        const d = new Date();
        const date = d.toLocaleDateString();
        document.getElementById('date').innerHTML = date;
    };

    render() {
        return (
            <>
                <button onClick={this.onButtonClick}>Вывод даты</button>
                <p className={extra_styles.date} id="date"></p>
            </>
        );
    }
    ;
}

export default CurrentDate;
