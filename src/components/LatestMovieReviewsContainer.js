import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'wiaChZ0q8WfOvVgzhsDGG1kgS9XwETko';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: [],
    }

    componentDidMount() {
        fetch(
            URL
        )
        .then((resp) => resp.json())
        .then((reviewData) => this.setState({ reviews: reviewData.results })) 
    }

    // renderReviews = () => {
    //     this.state.reviews.forEach(
    //         element => 
    //     )
    // }
    
    render() {
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}