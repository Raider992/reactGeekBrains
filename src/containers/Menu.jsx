import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Menu extends Component {

    render() {
        const links = this.props.items.map(()=> {
            return <Link to={items.link}>`{items.content}`</Link>
        });

        return (
            <nav>
                {links}
            </nav>
        );
    }
}

