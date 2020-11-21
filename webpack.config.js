const { resolve } = require('path');

module.exports = {
    entry: ['babel-polyfill', './app/main'], 
    output: {
    filename: './public/bundle.js',
    path: __dirname,
    },
    mode: 'development', 
    context: __dirname,
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', 'jsx']
    },
    module: {
        rules: [
            {
                test: /jsx?$/,
                include: resolve(__dirname, './app'),
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
  },
};