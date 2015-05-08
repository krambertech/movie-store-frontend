'use strict';

let React        = require('react');
let ReactRouter       = require('react-router');
let DefaultRoute = ReactRouter.DefaultRoute;
let Route        = ReactRouter.Route;

let Root         = require("./pages/Root/Root.jsx");
let Movies       = require("./pages/Movies/Movies.jsx");
let MovieDetails = require("./components/MovieDetails/MovieDetails.jsx");
let MovieForm    = require("./components/MovieForm/MovieForm.jsx");


let Router = (
    <Route name='root' path='/' handler={Root}>
        <Route name='movies' path='/movies' handler={Movies}>
        	<Route name='moviess' path='/movies/:params' handler={MovieForm} />
        	<Route name='movieDetails' path='/movies/movie/:id' handler={MovieDetails} />	
        </Route>

        <DefaultRoute name='defaultMain' handler={Movies}/>
    </Route>
);

module.exports = Router;