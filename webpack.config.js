module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: "./app/temp/scripts",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: "babel",
        query: {
          presets: ["es2015"]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}

// module.exports = {
//   entry: './app/assets/scripts/App.js',
//   output: {
//     path: './app/temp/scripts',
//     filename: 'App.js',
//   },
//   module: {
//     loaders: [{
//       loader: 'babel',
//       query: {
//         presets: ['es2015'],
//       },
//       test: /\.js$/,
//       exclude: /node_modules/,
//     }],
//   },
// };
