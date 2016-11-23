import React from 'react'
import MovieRating from './MovieRating'

class MovieRatingListPage extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       movieRatingList: [
         {FILM:"Avengers: Age of Ultron (2015)",Fandango_Difference:"0.5",Fandango_Ratingvalue:"4.5",Fandango_Stars:"5",Fandango_votes:"14846",IMDB:"7.8",IMDB_norm:"3.9",IMDB_norm_round:"4",IMDB_user_vote_count:"271107",Metacritic:"66",Metacritic_User:"7.1",Metacritic_norm:"3.3",Metacritic_norm_round:"3.5",Metacritic_user_nom:"3.55",Metacritic_user_norm_round:"3.5",Metacritic_user_vote_count:"1330",RT_norm:"3.7",RT_norm_round:"3.5",RT_user_norm:"4.3",RT_user_norm_round:"4.5",RottenTomatoes:"74",RottenTomatoes_User:"86"},
         {FILM:"Cinderella (2015)",Fandango_Difference:"0.5",Fandango_Ratingvalue:"4.5",Fandango_Stars:"5",Fandango_votes:"12640",IMDB:"7.1",IMDB_norm:"3.55",IMDB_norm_round:"3.5",IMDB_user_vote_count:"65709",Metacritic:"67",Metacritic_User:"7.5",Metacritic_norm:"3.35",Metacritic_norm_round:"3.5",Metacritic_user_nom:"3.75",Metacritic_user_norm_round:"4",Metacritic_user_vote_count:"249",RT_norm:"4.25",RT_norm_round:"4.5",RT_user_norm:"4",RT_user_norm_round:"4",RottenTomatoes:"85",RottenTomatoes_User:"80"},
         {FILM:"Ant-Man (2015)",Fandango_Difference:"0.5",Fandango_Ratingvalue:"4.5",Fandango_Stars:"5",Fandango_votes:"12055",IMDB:"7.8",IMDB_norm:"3.9",IMDB_norm_round:"4",IMDB_user_vote_count:"103660",Metacritic:"64",Metacritic_User:"8.1",Metacritic_norm:"3.2",Metacritic_norm_round:"3",Metacritic_user_nom:"4.05",Metacritic_user_norm_round:"4",Metacritic_user_vote_count:"627",RT_norm:"4",RT_norm_round:"4",RT_user_norm:"4.5",RT_user_norm_round:"4.5",RottenTomatoes:"80",RottenTomatoes_User:"90"},
         {FILM:"Do You Believe? (2015)",Fandango_Difference:"0.5",Fandango_Ratingvalue:"4.5",Fandango_Stars:"5",Fandango_votes:"1793",IMDB:"5.4",IMDB_norm:"2.7",IMDB_norm_round:"2.5",IMDB_user_vote_count:"3136",Metacritic:"22",Metacritic_User:"4.7",Metacritic_norm:"1.1",Metacritic_norm_round:"1",Metacritic_user_nom:"2.35",Metacritic_user_norm_round:"2.5",Metacritic_user_vote_count:"31",RT_norm:"0.9",RT_norm_round:"1",RT_user_norm:"4.2",RT_user_norm_round:"4",RottenTomatoes:"18",RottenTomatoes_User:"84"},
         {FILM:"Hot Tub Time Machine 2 (2015)",Fandango_Difference:"0.5",Fandango_Ratingvalue:"3",Fandango_Stars:"3.5",Fandango_votes:"1021",IMDB:"5.1",IMDB_norm:"2.55",IMDB_norm_round:"2.5",IMDB_user_vote_count:"19560",Metacritic:"29",Metacritic_User:"3.4",Metacritic_norm:"1.45",Metacritic_norm_round:"1.5",Metacritic_user_nom:"1.7",Metacritic_user_norm_round:"1.5",Metacritic_user_vote_count:"88",RT_norm:"0.7",RT_norm_round:"0.5",RT_user_norm:"1.4",RT_user_norm_round:"1.5",RottenTomatoes:"14",RottenTomatoes_User:"28"}
       ]
     }
  }

  render() {
    let movieRatings = this.state.movieRatingList.map(movieRating => {
        return(
          <MovieRating data={movieRating} key={movieRating.FILM}/>
        )
    })

    return (
      <div>
        <h1>Movie Ratigs</h1>
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
