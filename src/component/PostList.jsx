import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../redux/actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  // saat komponent dirender pertama kali panggil fungsi fetchPostAndUser yang dikirim lewat props
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  //   mapping post dan panggil component UserHeader sambil mengirimkan userId lewat props
  renderList = () => {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers: fetchPostsAndUsers })(PostList);
