import React, {Component} from 'react';

import SignIn from '../components/SignIn'

class Header extends Component {
    state = {
        logo: 'https://bcassetcdn.com/asset/logo/de1fb7c6-f69b-43f4-8f2a-57919ffeed99/logo?v=3&text=Logo+Text+Here',
        menuLinks: [
            {link: '/', content: 'Home'},
            {link: '/signin', content: 'SignIn'}
        ]
};

render()
{
    return (
        <header>
            <img src={this.state.logo} alt=""/>
            <h1>Творческий уголок ...</h1>
            <Menu items={this.state.menuLinks}/>
        </header>
    );
}
}

export default Header;
