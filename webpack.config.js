module.exports = {
  devtool: 'eval-source-map' ,
  entry: __dirname + '/app/main.js',
  output:{
    path:  __dirname + '/dist',
    filename: 'bundle.js'
  }
}