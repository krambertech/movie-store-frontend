module.exports = {
    entry: "./app/App.jsx",
    output: {
        path: __dirname + '/dist/build/',
        filename: "/main.js",
        publicPath: "/build/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less!autoprefixer-loader"},
            { test: /\.png$/, loader: "url?limit=10000&mimetype=image/png" },
            { test: /\.svg/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.jsx$/, loader: "traceur?sourceMaps=true&runtime=true!jshint-loader!jsx-loader", exclude: [/node_modules/, /dist/] },
            { test: /\.js$/, loader: "jshint!traceur?sourceMaps&runtime", exclude: [/node_modules/, /dist/] },
            { test: /\.json$/, loader: "json"}
        ]
    },
    jshint: require('./jshint.json')
};