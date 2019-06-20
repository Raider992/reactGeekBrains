import React, {Component} from 'react';

import Post from '../components/Post';
import Modal from "../components/modal/Modal";
import Welcome from "../components/Welcome";


class Blog extends Component {
    state = {
        modal: true
    };

    handleButton = () => {
        this.setState({modal: !this.state.modal});
    };

    render() {
        console.log('111', this.props);
        const posts = this.props.data;
        return (
            <>
                {posts.map((item) => {
                    return (
                        <Post
                            header={item.header}
                            sub_header={item.sub_header}
                            content={item.content}
                            date={item.date}
                            author={item.author}
                        />)
                })}
                if(this.state.modal) {
                <Modal>
                    <Welcome onBtnClick={this.handleButton()}/>
                </Modal>
                }
            </>
        );
    }
}

export default Blog;
