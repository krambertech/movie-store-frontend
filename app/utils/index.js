'use strict';

let DataService = require('./DataService.js');
let Api = require('./Api.js');

let api = new Api();

module.exports = new DataService(api);