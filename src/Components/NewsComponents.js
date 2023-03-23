import { Link } from "react-router-dom";

const NewsComponents = (props) => {
  const styles = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  return (
    <div className="card my-2" style={{ height: "600px" }}>
      <img
        src={props.imageUrl}
        className="card-img-top"
        alt="NoImageFound"
        style={{ width: "100%", height: "250px" }}
      />
      <div className="card-body">
        <h5
          className="card-title title"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.title}
        </h5>
        <p className="card-text desc" style={styles}>
          {props.description}
        </p>
        <p className="card-text " style={styles}>
          Author: {props.author}
        </p>
        <p className="card-text source " style={styles}>
          {props.source}
        </p>
        <p className="card-text " style={styles}>
          {props.date}
        </p>
        <Link
          to={props.url}
          target="_blank"
          rel="noreferrer"
          className="readMore btn btn-sm btn-dark"
        >
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default NewsComponents;
