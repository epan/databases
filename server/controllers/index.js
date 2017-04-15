var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('The request: ', JSON.stringify(req.body));
      console.log('app tried to get messages from CONTROLLER');
      // models.messages.get();
      res.writeHead(200);
      res.end(JSON.stringify({'results': [{
        'username': 'nik',
        'text': 'im static',
        'roomname': 'lobby'
      }]}));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('THIS IS THE REQ BODY: ', req.body);
      models.messages.post(req.body);
      res.writeHead(200);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('- - - - - req obj from users.post: ', req);
      res.end();
    }
  }
};
