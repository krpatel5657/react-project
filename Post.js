import React, { Component } from 'react'
import Comment from './Comment.js';

class Post extends Component {
    constructor(props) {}
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="comment-list">
                <Comment content="hello world" />
                <Comment content="hello world" />
                <Comment content="hello world" />
            </div>
        );
    }
}
export default Post;