import React, {Component} from 'react';
import User from "./User";

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    render() {

        if(!this.state.posts.length) {
            return null;
        }

        const posts = this.state.posts.map((post, index) => {
            return <Post key={index} { ...post } />
        });

        return (
            <div>
                <h1>Посты</h1>
                { posts }
            </div>
        );
    }
}

export default PostList;
