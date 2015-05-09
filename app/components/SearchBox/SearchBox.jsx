'use strict';

let React = require('react');
let FluxMixin = require('fluxxor').FluxMixin(React);

require('./SearchBox.less');

let SearchBox = React.createClass({

	mixins: [FluxMixin],

	inizializeQuerySearch() {
        let self = this;
        let baseUrl = 'http://127.0.0.1:9125/search/';

      
        var states = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: baseUrl + self.getQuery(),
                replace:  () => { 
                    return baseUrl + self.getQuery();
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
           if (this.getQuery() === '') {
                self.getFlux().actions.movieActions.searchMoviesEnd();
           }
            
        });
    },

    getQuery() {
        var query = $('.typeahead.tt-input').typeahead('val');

    	return query;
    },

    componentDidMount() {
    	this.inizializeQuerySearch();
    },

    searchClick() {
        $('.typeahead').toggleClass('hidden');
    },

	render() {
		return  <div className="search-box">
					<input className="typeahead hidden" type="text" placeholder="Search" />
					<i className="fa fa-search" onClick={this.searchClick}></i>
				</div>;
	}
});

module.exports = SearchBox;