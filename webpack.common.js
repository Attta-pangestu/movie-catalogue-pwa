/* eslint-disable no-undef */
const copywebpackPlugin = require('copy-webpack-plugin') ; 
const HtmlWebpackPlugin = require('html-webpack-plugin') ; 
const {GenerateSW} = require('workbox-webpack-plugin');
const path = require('path') ; 


module.exports = {
    entry : {
        app : path.resolve(__dirname, 'src/js/index.js') ,
    }, 
    output : {
        filename: '[name].bundle.js', 
        path : path.resolve(__dirname, 'dist'),
        clean : true 
    }, 
    module : {
        rules: [
            {
                test: /\.css$/, 
                use : [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    }, 
                ],
            }
        ]
    }, 
    plugins : [
        new HtmlWebpackPlugin({
            filename: 'index.html', 
            template : path.resolve(__dirname, 'src/template/index.html')
        }),
        new copywebpackPlugin({
            patterns : [{
                from : path.resolve(__dirname, 'src/public/'),
                to : path.resolve(__dirname, 'dist/'),
            }]
        }),
        new GenerateSW({
            swDest : './sw.bundle.js'
        })
    ]
    
};
