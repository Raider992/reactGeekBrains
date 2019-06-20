import React, {Component} from 'react';

class Welcome extends Component {

    btnClickHandler = () =>{
        this.props.onBtnClick();
    };

    render() {
        return (
            <div className="modal">
                <h3>Modal Window</h3>
                <button onClick={()=>this.btnClickHandler()}>Close</button>
            </div>
        );
    }
}

export default Welcome;
