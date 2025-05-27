const devMode = true //process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');


module.exports = {

    // Modo que toma el webpack
    mode: devMode ? 'development' : 'production',

    optimization: {
        minimize: !devMode,
        minimizer: [
            new CssMinimizerPlugin({
                minify: CssMinimizerPlugin.cssoMinify,
            }),
            new TerserPlugin({
                extractComments: true,
            })
        ],
    },

    entry: './src/scripts/index.ts',

    output: {
        path: path.resolve(__dirname, 'assets/bundle'),
        filename: devMode ? 'bundle.js' : 'bundle.min.js'
    },

    // Configurar dev-server para que escuche por un puerto especifico
    devServer: {
        port: 5004
    },

    
    devtool: "source-map",

    module: {
        rules: [
            { test: /\.tsx|.ts?$/, loader: "ts-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader"
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },


    plugins: [
        // Plugin para que se exporte por aparte el css
        new MiniCssExtractPlugin({
            filename: devMode ? 'bundle.css' : 'bundle.min.css'
        })
    ],

}