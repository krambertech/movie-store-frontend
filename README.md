# Movie store application

### Installation

1 - Clone the front-end and [back-end](https://github.com/krambertech/movie-store-backend) parts of the project

```sh
$ mkdir movie-store
$ cd movie-store
$ git clone git@github.com:krambertech/movie-store-frontend.git
$ git clone git@github.com:krambertech/movie-store-backend.git
```

2 - Install dependencies via [npm](https://www.npmjs.com)
```sh
$ cd movie-store-frontend
$ npm install
$ cd ../movie-store-backend
$ npm install
```

3 - Run the [mongo](http://www.mongodb.org) database server
```sh
$ mongod
```

4 - Run the server
```sh
$ node server.js
```

5 - Run dev server
```sh
$ cd ../movie-store-frontend
$ npm run serve
```

Go to [http://localhost:8090/](http://localhost:8090/#/) and see what happens

---
### Usage
When you first open the application the database should be empty. 

##### Adding movies

Let's fill database with initial data. 
In order to do this, you need click on plus button in the right bottom corner of your screen, you will see the form for adding movies: you can add one by submitting a form or simply by uploading the text file with some movies, some examples are in ./movie_files folder

The text file should be formatted like:

```
Title: Blazing Saddles
Release Year: 1974
Format: VHS
Stars: Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn

Title: Casablanca
Release Year: 1942
Format: DVD
Stars: Humphrey Bogart, Ingrid Bergman, Claude Rains, Peter Lorre
```


##### Viewing movies added

Now you can view all movies you added by clicking back button. All of them are arranged on the screen in the cards view. You can sort them in descending and ascending order alphabetically by clicking the sort icon in the top right corner.

To delete the movie - press cross icon in the top right corner of the movie

If you want to see detailed information about the movie - press 'Discover more' link. The detailed view of the movie will be opened.

##### Searching

There are 2 options to search by:
  - Movies
  - Actor names

In order to change the option you are searching by, click toggle in the right corner of the toolbar. Start typing and see what happens. 

---
### Archtecture

##### General description

The front-end part of the application is written using [React](http://reactjs.net) framework with [Flux](https://facebook.github.io/flux/) and [Less](http://lesscss.org). 

Technologies used:
  - [react-router](https://github.com/rackt/react-router) library for routing
  - [typeahead](https://twitter.github.io/typeahead.js/) for search
  - [Material-UI](http://callemall.github.io/material-ui/#/) for some components
  - [webpack](http://webpack.github.io) for building

The back-end part of the application uses [mongo](http://www.mongodb.org) and [express.js](http://expressjs.com).

##### Concepts

Application is divided into independent components and pages. 

Pages are directly included in routes, they consist of other components, manage all the actions and communicate directly to Flux. Components get all data from page and represent it to user, provide user interactions, but do not communicate with store. 

All data representing by application is contained in stores, which communicate with pages through actions. 

Utils perform all additional functionality, such as handling data, communicatiom with API, parsing file and validation.

##### Structure

- actions
   - MovieActions - perform actions with movie
- stores
   - MovieStore - stores all movies data
- utils
   - DataUtil - middle layer between ApiUtil and actions
   - ApiUtil - communicates with Api
   - FileParserUtil - parses files with movies uploaded by user
   - ValidationUtil - validates user input 
- pages
   - Root - contains layout of tha page
   - Movies - page, representing list of movies to user
   - AddMovie - containes interface for adding new movies
   - MovieDetails - shows detailed movie view
- components
   - Toolbar - top menu bar
   - Footer
   - SearchBox
   - MoviePreview - card with brief information about the movie
   - MoviesToolbar - toolbar on the Movies page
   - TopBar 
   - Floating buttons
- App 
- Router
- Constants

<a href="http://www.youtube.com/watch?feature=player_embedded&v=cuH4_IJSk_A" target="_blank"><img src="http://img.youtube.com/vi/cuH4_IJSk_A/0.jpg" alt="Screencast" width="240" height="180" border="10" /></a>








