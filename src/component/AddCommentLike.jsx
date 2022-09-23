import React from 'react';

class AddCommentLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: 0 };
  }

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
              <p style={{ fontWeight: 'bold' }}>{`| Liked: ${this.state.liked}`}</p>
            </div>
            <div className="text">{this.props.comment}</div>
            <button onClick={() => this.setState({ liked: this.state.liked + 1 })}>Click me</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCommentLike;
