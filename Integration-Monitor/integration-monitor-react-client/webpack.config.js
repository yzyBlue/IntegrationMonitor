module.exports = {
  entry: {
    'index':'./index.js',
    'loginPage':'./loginPage.js'
  },

  output: {
	//path: __dirname + '/dist/',
	   path:'../integration-monitor-web/src/main/webapp/WEB-INF/js/',
    filename: '[name].js',
    publicPath: '../integration-monitor-web/src/main/webapp/WEB-INF/js/'
  },
  module: {
    loaders: [
	  { test: /\.css$/, loader: 'style!css' },
      { 
		test: /\.js$/, 
		exclude: /node_modules/, 
		loader: 'babel-loader?presets[]=es2015&presets[]=react' 
		}
    ]
  }
}
