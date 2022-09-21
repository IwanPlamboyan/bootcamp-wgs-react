const Comment = ({ data }) => {
  return data.map((dataComment, index) => (
    <div className="ui container comments" key={index}>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={dataComment.image} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {dataComment.name}
          </a>
          <div className="metadata">
            <span className="date">{dataComment.date}</span>
          </div>
          <div className="text">{dataComment.comment}</div>
        </div>
      </div>
    </div>
  ));
};

export default Comment;
