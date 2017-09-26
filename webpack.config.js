var config = {
  entry: "./main.js",

  output: {
    path: "/",
    filename: "index.js"
  },

  devServer: {
    inline: true,
    port: 8080
  },

  exclude: [path.resolve(__dirname, "node_modules")],

  include: [path.resolve(__dirname, "src")],

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",

        query: {
          plugins: ["transform-runtime"],
          presets: ["es2015", "react", "stage-0"]
        }
      }
    ]
  }
};

module.exports = config;
