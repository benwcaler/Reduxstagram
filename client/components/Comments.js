import React from 'react';

class Comments extends React.Component {

  renderComment(comment, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'>&times;</button>
        </p>
      </div>
    );
  }

  handleSubmite(e) {
    e.preventDefault();
    const postId = this.props.params.postId;
    const author = this.ref.author.value;
    const comment = this.ref.comment.value;

    this.props.addComment(postId, author, comment);
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input type="text" ref='author' placeholder='author' />
          <input type="text" ref='comment' placeholder='comment' />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;