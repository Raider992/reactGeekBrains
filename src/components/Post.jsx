import React, {Component} from 'react';

class Post extends Component {

    render() {
        console.log('222', this.props);
        return (
            <>
                <h3>{this.props.header}</h3>
                <h5>{this.props.sub_header}</h5>
                <p className="content">{this.props.content}</p>
                <p className="date">{this.props.date}</p>
                <p className="author">{this.props.author}</p>
            </>
        );
    }
}

export default Post;


{/*<h3>Lorem Ipsum</h3>*/}
{/*<h5>What is Lorem Ipsum</h5>*/}
{/*<p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore*/}
{/*    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
{/*    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse*/}
{/*    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in*/}
{/*    culpa qui officia deserunt mollit anim id est laborum.</p>*/}
{/*<p className="date">05.01.0001</p>*/}
{/*<p className="autor">Ivanich</p>*/}
