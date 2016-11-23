import React from 'react'

function MovieRating(props) {
  return (
    <tr>
      <td>{props.data.FILM}</td>
      <td>{props.data.IMDB}</td>
      <td>{props.data.Metacritic}</td>
      <td>{props.data.RottenTomatoes}</td>
    </tr>
  )
}

export default MovieRating
