var webpack = require('webpack')
var config= {
    entry: {
        'index': './index.js',
        //'test': './AppTest.js',
        'loginPage': './loginPage.js',
        'vendor': ['react', 'react-dom','react-highcharts','react-bootstrap']
    },

    output: {
        path: '../integration-monitor-web/src/main/webapp/WEB-INF/js/',
        filename: '[name].js',
        publicPath: '../integration-monitor-web/src/main/webapp/WEB-INF/js/'
    },
   //  entry: {
   //      'react.pikaday': './components_v2/ReactPikaday.js',
   //      'vendor': ['react', 'react-dom','react-pikaday']
   //  },

   // output: {
   //     path: __dirname + '/dist/',
   //     filename: '[name].js',
   //     publicPath: './dist/'
   // },



    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      })
    ]
}
module.exports = config