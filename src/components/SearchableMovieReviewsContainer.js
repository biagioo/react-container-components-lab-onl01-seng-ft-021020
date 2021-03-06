import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here


export default class SearchableMovieReviewsContainer extends Component {
    
    constructor(){
        super()
        this.state = {
            reviews : [],
            searchTerm :''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.searchTerm)
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(searchData => this.setState({reviews : searchData.results}))
    }

   

    handleInput = e => {
        this.setState({
          searchTerm: e.target.value
        })
      }
    
    render() {
        return (
            <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleInput} value={this.state.searchTerm} />
          <input type='submit'/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
        )
    }
}
