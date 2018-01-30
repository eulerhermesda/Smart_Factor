//var DefaultBuilder = require("truffle-default-builder");

module.exports = {
   /*build: new DefaultBuilder({
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  }),*/
  networks: {
    development: {
      host: "52.215.75.218",
      port: 8545,
      network_id: "*",
      gas : 4712387
    },
  }
};
