'use strict';

let React        = require('react');
let ReactRouter       = require('react-router');
let DefaultRoute = ReactRouter.DefaultRoute;
let Route        = ReactRouter.Route;

let Root         = require("./pages/Root/Root.jsx");
let Movies       = require("./pages/Movies/Movies.jsx");
let MovieDetails = require("./pages/MovieDetails/MovieDetails.jsx");
let AddMovie     = require("./pages/AddMovie/AddMovie.jsx");


let Router = (
    <Route name='root' path='/' handler={Root}>
        <Route name='movies' path='/movies' handler={Movies} />
        <Route name='addMovie' path='/add' handler={AddMovie} />
        <Route name='movieDetails' path='/movies/:id' handler={MovieDetails} />
        <DefaultRoute name='defaultMain' handler={Movies}/>
    </Route>
);

module.exports = Router;