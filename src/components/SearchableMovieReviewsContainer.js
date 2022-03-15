import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'wiaChZ0q8WfOvVgzhsDGG1kgS9XwETko';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: "",
    }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        fetch(
            URL + "&query=" + this.state.searchTerm
        )
        .then(resp => resp.json())
        .then(reviewData => this.setState({ reviews: reviewData.results }))
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    onChange={this.handleChange}>
                    </input>
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}