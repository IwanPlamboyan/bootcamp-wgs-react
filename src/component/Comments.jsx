import { faker } from '@faker-js/faker';

const App = ({ name, date, comment }) => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {name}
          </a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div className="text">{comment}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
