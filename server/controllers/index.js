var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('The request: ', JSON.stringify(req.body));
      console.log('app tried to get messages from CONTROLLER');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var postData = '';
      req.on('data', (chunk) => {
        postData += chunk;
      });
      req.on('end', () => {
        console.log('postData is: ', postData);
        // Convert js obj => sql insert, send to DB
        models.messages.post(postData);
      });
      console.log('app tried to post messages from CONTROLLER');
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
