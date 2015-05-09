'use strict';

let React = require('react');
let ReactRouter = require('react-router');
let FluxMixin = require('fluxxor').FluxMixin(React);

require('./SearchBox.less');

let SearchBox = React.createClass({

	mixins: [FluxMixin,
             ReactRouter.Navigation,
             ReactRouter.State],

    getInitialState(){
        return {
            searchingMovies: true
        };
    },

	inizializeQuerySearch() {
        let self = this;
        let baseUrl = (this.state.searchingMovies) ? 'http://127.0.0.1:9125/movies/' : 'http://127.0.0.1:9125/actors/';

      
        var movies = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: baseUrl + self.getTypeAheadQuery(),
                replace:  () => { 
                    return baseUrl + self.getTypeAheadQuery();
                },
                filter: (data) => {
                    var searchQuery = [];

                	data.forEach((movie) => { 
                        if  (this.state.searchingMovies) {
                    		searchQuery.push({
                    			value: movie.title
                    		});
                        } else {
                            movie.actors.forEach(actor => {
                                searchQuery.push({
                                    value: actor.name + ' ' + actor.surname
                                });
                            });
                        }
                    });

                	self.getFlux().actions.movieActions.searchMovies(data);
                    return searchQuery;
                }
            }
        });

        let $autocompleteSelect = $('.typeahead');

        movies.initialize();

        let basicParameters = {
            hint: true,
            highlight: true,
            minLength: 1
        };

        $autocompleteSelect.typeahead(basicParameters, {
            name: 'movies',
            displayKey: 'value',
            source: movies.ttAdapter()
        }).on('keyup', () => {
           if (this.getTypeAheadQuery() === '') {
                self.getFlux().actions.movieActions.searchMoviesEnd();
           }    
        });
    },

    getTypeAheadQuery() {
        var query = $('.typeahead.tt-input').typeahead('val');

    	return query;
    },

    componentDidMount() {
    	this.inizializeQuerySearch();
    },

    searchClick() {
        if (!this.isActive('movies')) {
            this.context.router.transitionTo('movies');
        }
        $('.typeahead').toggleClass('hidden');
        $('.typeahead.tt-input').focus();
    },

    caretClick(){

    },

    changeSearchType() {
        this.state.searchingMovies = !this.state.searchingMovies;
        $('.typeahead').typeahead('destroy');
        this.inizializeQuerySearch();
    },

	render() {
		return  <div className="search-box">
					<input className="typeahead hidden" type="text" placeholder="Search"/>
					<i className="fa fa-search" onClick={this.searchClick}></i>
                    <select id="select-type-search" onChange={this.changeSearchType}>
                        <option>Search in movies</option>
                        <option>Search in actors</option>
                    </select>
				</div>;
	}
});

module.exports = SearchBox;