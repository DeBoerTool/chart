module.exports = {
  mode: 'development',
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },
}