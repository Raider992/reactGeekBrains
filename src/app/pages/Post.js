import React, { Component } from 'react'
import axios from 'axios';
import PostDetails from "../components/PostDetails";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

    render() {
        return (
            <div>
                { this.state.post && <PostDetails {...this.state.post} /> }
            </div>
        );
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.id}`)
            .then(response => {
                this.setState({ post: response.data })
            })
    }
}

export default Post;
