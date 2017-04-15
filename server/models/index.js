var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      console.log('app tried to get messages from MODELS');

    }, // a function which produces all the messages
    post: function (postData) {
      console.log('POST data from MODEL: ', postData);

      db.dbConnection.query(`select id from users where username='${postData.username}'`, (err, results, fields) => {
        var insertUser = `INSERT INTO users (username) VALUES ('${postData.username}')`;
        var insertMessage;

        if (err) { console.log(err); }
        if (results.length === 0) {
          db.dbConnection.query(insertUser, (err, results, fields) => {
            if (err) { console.log(err); }
            insertMessage = `INSERT INTO messages (text, userId, roomname) VALUES ('${postData.text}', ${results.insertId}, '${postData.roomname}')`;
            db.dbConnection.query(insertMessage, db.callbackLog);
          });
        } else {
          insertMessage = `INSERT INTO messages (text, userId, roomname) VALUES ('${postData.text}', ${results[0].id}, '${postData.roomname}')`;
          db.dbConnection.query(insertMessage, db.callbackLog);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      console.log('- - - - - req obj from users.post: ', req);
    }
  }
};
