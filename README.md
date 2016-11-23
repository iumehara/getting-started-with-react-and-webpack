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
