const path = require("path");

module.exports =  {
  entry: [
    "./source/js/add-to-cart.js",
    "./source/js/catalog-slider.js",
    "./source/js/faq.js",
    "./source/js/filter.js",
    "./source/js/login.js",
    "./source/js/main-slider.js",
    "./source/js/script.js",
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "source/js"),
    iife: false
  },
  devtool: false
}
