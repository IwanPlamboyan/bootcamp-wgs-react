import React from 'react';
import Comment from './component/CommentClass';

class App extends React.Component {
  render() {
    return this.props.data.map((item, index) => (
      <div className="comment container" key={index}>
        <Comment name={item.name} date={item.date} comment={item.comment} image={item.image} />
      </div>
    ));
  }
}

export default App;
