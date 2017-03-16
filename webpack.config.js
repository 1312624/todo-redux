const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src/js/app.js'),
    ],

    output: {
        filename: 'bundle.min.js',
        path: path.join(__dirname, 'src/public'),
        publicPath: '/'
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ],
        extensions: [".js", ".json", ".jsx"],
    },

    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'src/public'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    plugins: ['react-hot-loader/babel', 'react-html-attrs'],
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ["style-loader" // creates style nodes from JS strings
                     ,"css-loader" // translates CSS into CommonJS
                     ,"sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin(
            {
                sourceMap: true
            }
        ),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
    ]
};