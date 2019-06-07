import React from 'react';


class CurrentDate extends Component {

    onButtonClick = (e) => {
        e.preventDefault();
        const d = new Date();
        const date = d.toLocaleDateString();
        document.getElementById('c_date').value = date;
    };

    render() {
        return (
            <>
                <button onClick={this.onButtonClick}>Вывод даты</button>
                <input type="text" id="c_date" />
            </>
        );
    }
    ;
}

export default CurrentDate;
