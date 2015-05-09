'use strict';

let React = require('react');
let ReactRouter = require('react-router');
let FluxMixin = require('fluxxor').FluxMixin(React);

require('./SearchBox.less');

let SearchBox = React.createClass({

	mixins: [FluxMixin,
             ReactRouter.Navigation,
             ReactRouter.State],

	inizializeQuerySearch() {
        let self = this;
        let baseUrl = 'http://127.0.0.1:9125/search/';

      
        var states = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: baseUrl + self.getTypeAheadQuery(),
                replace:  () => { 
                    return baseUrl + self.getTypeAheadQuery();
                },
                filter: (data) => {
                	var searchQuery = data.map((movie) => { 
                		return {
                			value: movie.title
                		};
                	});
                	self.getFlux().actions.movieActions.searchMovies(data);
                    return searchQuery;
                }
            }
        });

        let $autocompleteSelect = $('.typeahead');

        states.initialize();

        let basicParameters = {
            hint: true,
            highlight: true,
            minLength: 1
        };

        $autocompleteSelect.typeahead(basicParameters, {
            name: 'states',
            displayKey: 'value',
            source: states.ttAdapter()
        }).on('keyup', () => {
           if (this.getTypeAheadQuery() === '') {
                self.getFlux().actions.movieActions.searchMoviesEnd();
           }
            
        }).on('unfocus', () => {
            this.addClass('hidden');
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

	render() {
		return  <div className="search-box">
					<input className="typeahead hidden" type="text" placeholder="Search"/>
					<i className="fa fa-search" onClick={this.searchClick}></i>
				</div>;
	}
});

module.exports = SearchBox;