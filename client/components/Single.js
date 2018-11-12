import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[this.props.params.postId] || [];

    return (
      <div className="single-photo">
        <Photo index={i} post={post} {...this.props} />
        <Comments postComments={postComments}  {...this.props} />
      </div>
    );
  }
}

export default Single;