const { resolve } = require('path');

module.exports = {
    entry: ['babel-polyfill', './client/main'], 
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
                include: resolve(__dirname, './client'),
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