var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      console.log('app tried to get messages from MODELS');
    }, // a function which produces all the messages
    post: function (postData) {
      var parsedData = JSON.parse(postData);
      console.log('POST data from MODEL: ', parsedData.text);

      // IF USERNAME doesn't in (chats.users)
        // Insert user to chats.users table
      // Get userId by username (to DB)
      // Put userId in message (formatting)
      // Insert message to chats.messages (to DB)

      db.dbConnection.query(`select id from users where username='${parsedData.username}'`, (err, results, fields) => {
        var insertUser = `INSERT INTO users (username) VALUES ('${parsedData.username}')`;
        var insertMessage;

        if (err) { console.log(err); }
        if (results.length === 0) {
          db.dbConnection.query(insertUser, (err, results, fields) => {
            if (err) { console.log(err); }
            insertMessage = `INSERT INTO messages (text, userId, roomname) VALUES ('${parsedData.text}', ${results.insertId}, '${parsedData.roomname}')`;
            db.dbConnection.query(insertMessage, db.callbackLog);
          });
        } else {
          insertMessage = `INSERT INTO messages (text, userId, roomname) VALUES ('${parsedData.text}', ${results[0].id}, '${parsedData.roomname}')`;
          db.dbConnection.query(insertMessage, db.callbackLog);
        }
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {

    }
  }
};
