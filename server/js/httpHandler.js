const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);

  var deliverGet = () => {
    var stringify = JSON.stringify(messageQueue.messages)
    messageQueue.messages.splice(0, messageQueue.messages.length);
    return stringify;
  }

  res.end(deliverGet()); 
};


