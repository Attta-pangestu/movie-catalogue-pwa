/* eslint-disable no-undef */
const { merge } = require('webpack-merge'); 
const path = require('path');
const commonWebpack = require('./webpack.common') ; 

module.exports = merge(commonWebpack, {
    mode : 'development', 
    devServer : {
        static : path.resolve(__dirname, 'dist'), 
        port : 9000, 
        client : {
            overlay : {
                errors : true, 
                warnings: true,
            },
        },
    },
});
