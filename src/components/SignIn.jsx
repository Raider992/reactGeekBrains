import React, {Component} from 'react';

class SignIn extends Component {
    render() {
        return (
            <form action="#">
                <label htmlFor="name">Имя пользователя
                    <input type="text" name="name" placeholder="Ваше имя"/>
                </label>
                <label htmlFor="password">Имя пользователя
                    <input type="password" name="password"/>
                </label>
                <input type="submit" value="SignIn"/>
            </form>
        );
    }
}

export default SignIn;
