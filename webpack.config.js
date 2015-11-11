module.exports = {
    resolve: {
        extensions: ['.es6.js', '.js', '']
    },
    entry: {
        main: './app/scripts/main',
        event: './app/scripts/event'
    },
    output: {
        filename: '[name].js',
        path: './app/dist'
    },
    module: {
        noParse: [
            /scripts\/vendor/
        ],
        preLoaders: [
            {
                test: /\.es6\.js/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.es6\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};
