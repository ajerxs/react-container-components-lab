// Code MovieReviews Here
import React from "react";

const Review = ({display_title, headline, byline, summary_short}) => {
    return(
        <div key={display_title} className="review">
            <h2>{headline}</h2>
            <h3>By {byline}</h3>
            <h4>{summary_short}</h4>
        </div>
    )
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>

export default MovieReviews;