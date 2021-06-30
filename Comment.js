import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLiked: false, //represents if comment has been liked by user
        };
    }

    likeComment = () => {
        this.setState({
            isLiked: true,
        });
    }

    render() {
        return (
            <div id="coolcomment" className="comment-text" onClick=(this.likeComment)>
                {this.props.content}
                {this.state.isLiked ? <LikeButton /> : null}
            </div>

        );
    }
}
export default Comment;