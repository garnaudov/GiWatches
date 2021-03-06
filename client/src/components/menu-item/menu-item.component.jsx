import React from "react";
import { withRouter } from "react-router-dom"; //HOC that returns us MenuItem with access to location, match, history
import "./menu-item.styles.scss";

const MenuItem = (
  { title, size, imageUrl, history, linkUrl, match } //getting the title destructing the props
) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">BUY NOW</span>
      </div>
    </div>
  </div>
);

export default withRouter(MenuItem);
