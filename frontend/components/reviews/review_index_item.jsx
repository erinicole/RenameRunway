import React from "react";

const ReviewtIndexItem = props => {
  return (
    <div className="review-card">
      <div className="review-card-p">
        <span className="review-card-stars"> ****</span>
        <span className="review-card-date">
          {new Date(props.review.created_at).toDateString()}
        </span>
        <br />
        <div className="review-card-info">
          <div className="review-card-left">
            <div className="review-card-left-top">
              {props.review.first_name}
            </div>
            <div className="review-card-left-bottom">
              <br />
              HEIGHT: {props.review.height}
              <br />
              BODY TYPE: {props.review.body_type}
              <br />
              BUST SIZE: {props.review.bust_size}
              <br />
              WEIGHT: {props.review.weight}
            </div>
          </div>
          <div className="review-card-middle">{props.review.body}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewtIndexItem;
