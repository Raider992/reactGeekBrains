import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Blog from "./containers/Blog";

const posts = [
    {
        "index": 1,
        "header": "Lorem Ipsum",
        "sub_header": "What is Lorem Ipsum",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "date": "01.01.0001",
        "author":"Ivanich"
    },
    {
        "index": 2,
        "header": "Lorem Ipsum",
        "sub_header": "What is Lorem Ipsum",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "date": "02.01.0001",
        "author":"Ivanich"
    },
    {
        "index": 3,
        "header": "Lorem Ipsum",
        "sub_header": "What is Lorem Ipsum",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "date": "03.01.0001",
        "author":"Ivanich"
    },
    {
        "index": 4,
        "header": "Lorem Ipsum",
        "sub_header": "What is Lorem Ipsum",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "date": "04.01.0001",
        "author":"Ivanich"
    },
    {
        "index": 5,
        "header": "Lorem Ipsum",
        "sub_header": "What is Lorem Ipsum",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "date": "05.01.0001",
        "author":"Ivanich"
    }
];

class App extends Component {
    render() {
        return (
            <Blog data={posts}/>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
