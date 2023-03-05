import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewsComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
     styles:{ 
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
    }
    };
  }
  render() {


    const { title, description, imageUrl, date, url,source,author } = this.props; //this is desctructuring of objects
    return (
      <div className="card my-2" style={{ height: "600px" }}>
        <img
          src={imageUrl}
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
            {title}
          </h5>
          <p
            className="card-text desc"
            style={this.state.styles}
          >
            {description}
          </p>
          <p className="card-text " style={this.state.styles}>Author: {author}</p>
          <p className="card-text " style={this.state.styles}>Source: {source}</p>
          <p className="card-text " style={this.state.styles}>{date}</p>
          <Link
            to={url}
            target="_blank"
            rel="noreferrer"
            className="readMore btn btn-sm btn-dark"
          >
            Read More...
          </Link>
        </div>
      </div>
    );
  }
}

export default NewsComponents;
