import React, {Component} from 'react';
import ReactDOM from "react-dom";

class Modal extends Component {
    constructor() {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        document.getElementById('modal').appendChild(this.el);
    }

    componentWillUnmount() {
        document.getElementById('modal').removeChild(this.el);
    }

    render() {
        console.log('m', this.props);
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

export default Modal;
