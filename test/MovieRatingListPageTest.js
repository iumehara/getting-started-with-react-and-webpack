import expect, { spyOn } from 'expect'
import { shallow } from 'enzyme'
import 'whatwg-fetch'
import React from 'react'
import MovieRatingListPage from '../src/js/MovieRatingListPage'
import MovieRating from '../src/js/MovieRating'

describe('MovieRatingListPage', () => {
  it('displays header', () => {
    var spy = expect.spyOn(MovieRatingListPage.prototype, 'componentWillMount')


    let component = shallow(<MovieRatingListPage/>)


    expect(component.contains(<h1>Movie Ratings</h1>)).toBe(true)
    spy.restore()
  })

  it('fetches data and renders as MovieRating components', () => {
    let stubMovie = {FILM: 'Forrest Gump', imdb: 10, metacritic: 9, RottenTomatoes: 9}

    let stubFetchData = () => {
      return {
        then: (setStateImplementation) => {
          setStateImplementation([stubMovie])
        }
      }
    }

    var spy = expect.spyOn(
      MovieRatingListPage.prototype, 'fetchData'
    ).andReturn(
      stubFetchData()
    )


    let movieRatingListPage = shallow(<MovieRatingListPage/>)


    expect(spy).toHaveBeenCalled()
    expect(movieRatingListPage.contains(<h1>Movie Ratings</h1>)).toBe(true)
    expect(movieRatingListPage.contains(<MovieRating data={stubMovie} key={stubMovie.FILM}/>)).toBe(true)
    spy.restore()
  })
})
