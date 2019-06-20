import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Welcome from "../components/Welcome";


class Modal extends Component {
    constructor() {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.getElementById('modal').appendChild(this.el);
    }

    btnClick = () =>{
        this.props.onBtnClick();
    };

    componentWillUnmount() {
        document.getElementById('modal').removeChild(this.el);
    }

    render() {
        console.log('m', this.props);
        return ReactDOM.createPortal(
            <Welcome onBtnClick={this.btnClick}/>,
            this.el
        )
    }
}

export default Modal;
