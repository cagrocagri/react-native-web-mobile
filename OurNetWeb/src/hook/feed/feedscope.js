import React from "react";
import "./css/feed.css";
import { checkImageURL } from "../../../shared/utils/index";
import { images } from "../../../shared/constants";

export const NewsContentFeedMainScreen = (item) => {
  return Content_2(item);
};

export const NewsContentFeedMainSubScreen = (item) => {
  return Content_1(item);
};

function Content_1(item) {
  return (
    <div key={item.guid} className="custom-3 col col-6 my-4">
      {ContentScope(item)}
    </div>
  );
}

function Content_2(item) {
  return (
    <div key={item.guid} className="custom-3 col col-12 col-lg-6 col-xl-3">
      {ContentScope(item)}
    </div>
  );
}
function ContentScope(item) {
  return (
    <a
      href={item.links[0].url}
      title={item.title}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
    >
      <span className="category-name"></span>
      <span className="typeIcon"></span>
      {checkImageURL(
        item.enclosures && item.enclosures[0] && item.enclosures[0].url
      ) ? (
        <img src={item.enclosures[0].url} alt={item.title} className="card" />
      ) : (
        <img
          src={images.placeholderFastNewsImage}
          alt="placeholder"
          className="card"
        />
      )}
      <div className="text-truncate">
        <h3 className="h-elm e-h3 text-truncate">{item.title}</h3>
      </div>
    </a>
  );
}

export const TopNewsContentFeedContainer = (item) => {
  return (
    <div key={item.guid} className="custom-3 top-news">
      <a
        href={item.links[0].url}
        title={item.title}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <span className="category-name"></span>
        <span className="typeIcon"></span>

        <div className="text-truncate">
          <h3 className="h-elm e-h3 text-truncate">{item.title}</h3>
        </div>
      </a>
    </div>
  );
};

export const PagesTopNewsContentFeedContainer = (item) => {
  return (
    <div key={item.guid} className="custom-3 top-news">
      <a
        href={item.links[0].url}
        title={item.title}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <span className="category-name"></span>
        <span className="typeIcon"></span>
        <div className="text-truncate">
          <h3 className="h-elm e-h3 text-truncate text-start">{item.title}</h3>
        </div>
      </a>
    </div>
  );
};

export const NewsContentFeedHero = (item) => {
  return (
    <div key={item.guid} className="custom-3 col col-12 col-lg-6 col-xl-3">
      <a
        href={item.links[0].url}
        title={item.title}
        target="_blank"
        rel="noopener noreferrer"
        className="card"
      >
        <span className="category-name"></span>
        <span className="typeIcon"></span>
        {checkImageURL(
          item.enclosures && item.enclosures[0] && item.enclosures[0].url
        ) ? (
          <img src={item.enclosures[0].url} alt={item.title} className="card" />
        ) : (
          <img
            src={images.placeholderFastNewsImage}
            alt="placeholder"
            className="card"
          />
        )}
        <div className="text-truncate">
          <h3 className="h-elm e-h3 text-truncate">{item.title}</h3>
        </div>
      </a>
    </div>
  );
};

export const PagesNewsSubContent = (item) => {
  return (
    <div key={item.guid} className="custom-3 col col-12 col-lg-6">
      <a
        href={item.links[0].url}
        title={item.title}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <div className="container-fluid">
          <li className="subcontent-title">{item.title}</li>
        </div>
      </a>
    </div>
  );
};

export const NewsRootFeed = (feedData, renderItem) => {
  return (
    <div className="row">
      {feedData.map((item, index) => (
        <React.Fragment key={item.guid || index.toString()}>
          {renderItem(item)}
        </React.Fragment>
      ))}
    </div>
  );
};
