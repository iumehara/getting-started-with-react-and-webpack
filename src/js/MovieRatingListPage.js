import React from 'react'
import MovieRating from './MovieRating'

class MovieRatingListPage extends React.Component {
  constructor(props) {
     super(props)
     this.state = { movieRatingList: []};
  }

  fetchData() {
    return fetch('https://movieratingsdata.firebaseio.com/movies.json')
      .then((response) => {
        return response.json()
      }).catch((ex) => {
        console.log('parsing failed', ex)
      });
  }

  componentWillMount() {
    this.fetchData()
      .then((data) => {
        this.setState({movieRatingList: data});
      }
    );
  }

  render() {
    let movieRatings = this.state.movieRatingList.map(movieRating => {
        return(
          <MovieRating data={movieRating} key={movieRating.FILM}/>
        )
    })

    return (
      <div>
        <h1>Movie Ratings</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>IMDB Rating</th>
              <th>Metactic Rating</th>
              <th>Rotten Tomatoes Rating</th>
            </tr>
          </thead>
          <tbody>
            {movieRatings}
          </tbody>
        </table>
      </div>
    )
  }
}

export default MovieRatingListPage
