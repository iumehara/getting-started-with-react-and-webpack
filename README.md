# MOVIE RATING APP (aka No longer the health or todo list app)
## 05 FETCHING DATA

This branch starts off at the end of the `04_TESTING_REACT_COMPONENTS` branch. However, we're rewriting the app to fit the api data we have, so you can read up to section 4, then start coding here!

### Updating the app
So we want to fetch some data. Where should we make a request? Well, turns out fivethirtyeight has a lot of interesting data in their git repo [fivethirtyeight/data]("https://github.com/fivethirtyeight/data"). I formatted one of the files as JSON, and uploaded it to firebase at [https://movieratingsdata.firebaseio.com/movies.json](https://movieratingsdata.firebaseio.com/movies.json)

So now we can request an array of movie ratings. Let's copy over the `Todo` and `TodoListPage` files to new `MovieRating` files, and make the necessary changes so that it will render the data we get back from firebase. I'll hard code in the data for the first four movies for now.

Check out the new files `MovieRating.js` and `MovieRAtingListPage.js`. You'll notice that they are structured the same as their TodoList counterparts.

Let's then change the imported file in `index.js`
```
import React from 'react'
import { render } from 'react-dom'
import MovieRatingListPage from './MovieRatingListPage'

render(
    <MovieRatingListPage />,
    document.getElementById('health-app')
)
```

now we're ready to get started!

First, let's import a library for making the request. [whatwg-fetch](https://github.com/github/fetch) is a great promise-based fetching library made by github.

`npm install --save whatwg-fetch`

Now in `MovieRatingList`, let's update the constructor to start with a movieRatingList with empty data.
`MovieRatingListPage.js`
```
constructor(props) {
   super(props)
   this.state = { movieRatingList: []};
}
```
Next, let's start fetching data as the page loads. To do this, let's call `fetchData` (yet to be written) during `componentWillMount` which is a lifecycle method that gets called before the initial render.

```
componentWillMount() {
  this.fetchData()
}
```

Now let's write the fetchData method.

```
fetchData() {
  return fetch('https://movieratingsdata.firebaseio.com/movies.json')
    .then((response) => {
      return response.json()
    }).catch((ex) => {
      console.log('parsing failed', ex)
    });
}
```
You can see that the fetch returns a promise, and we handle it by converting the reponse we get to json.

Let's go back to `componentWillMount` and update it so that it handles the json promise it gets back from `fetchData`

```
componentWillMount() {
    this.fetchData()
      .then((data) => {
        this.setState({movieRatingList: data});
      }
    );
  }
```

Now if you run `npm start`, you should see a table of movie ratings data!

For testing, I used the `spyOn` feature in the `expect` library to stub the `fetchData` function to return a function instead of a promise.

`MovieRatingListPageTest.js`
```
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
```
Because the implementation for `componentDidMount` calls `then()` with an argument of `data => this.setState({movieRatingList: data})`, we need to make sure the stub version of the method returns something on which `then` can be called.

Now if we shallow render the component, we should be able to confirm
that a `MovieRating` is rendered with the contents of our `stubMovie`.

```
let movieRatingListPage = shallow(<MovieRatingListPage/>)


expect(spy).toHaveBeenCalled()
expect(movieRatingListPage.contains(<h1>Movie Ratings</h1>)).toBe(true)
expect(movieRatingListPage.contains(<MovieRating data={stubMovie} key={stubMovie.FILM}/>)).toBe(true)
spy.restore()
```

If you find the stubbing to be a bit confusing, don't worry because it is. Just take some time to reason through the logic until it makes sense ;)
