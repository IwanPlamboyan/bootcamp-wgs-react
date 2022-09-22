import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={this.props.image} />
          </a>
          <div className="content">
            <a href="/" className="author">
              {this.props.name}
            </a>
            <div className="metadata">
              <span className="date">{this.props.date}</span>
            </div>
            <div className="text">{this.props.comment}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
