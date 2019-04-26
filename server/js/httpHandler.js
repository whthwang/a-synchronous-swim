const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);

  var possibleMoves = ['left','right','up','down'];
  // possibleMoves[Math.floor(Math.random() * Math.floor(4))]

  res.end(possibleMoves[Math.floor(Math.random() * 4)]);
};


