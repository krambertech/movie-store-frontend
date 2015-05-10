# Movie store application
---
### Installation

1 - Clone the front-end and back-end parts of the project

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
In order to do this, you need click on plus button in the right bottom corner of your screen, you will see the form for adding movies: you can add one by submitting a form or simply by uploading the text file. 

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
