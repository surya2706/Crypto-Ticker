const path = require('path');

module.exports = {
    entry: "./client-src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                presets: ['react', 'stage-2'],
                },
            },
            {
                test: /\.css?$/,
                loader: 'style-loader!css-loader',
        
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css'],
        modules: ['node_modules'],
      },
}