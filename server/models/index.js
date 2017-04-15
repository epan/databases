var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      console.log('app tried to get messages from MODELS');
    }, // a function which produces all the messages
    post: function (postData) {
      // IF ROOM doesn't (in DB)
        // Add room to chats.rooms with a room ID
        // Put roomId in message row
      // ELSE
        // Find room in chats.rooms to get room's Id
        // Put roomId in message row

      // SEND Message to DB
        // convert to sql insert
        // send with db.something
      var parsedData = JSON.parse(postData);
      console.log('POST data from MODEL: ', parsedData.text);
      console.log('app tried to post messages from MODELS');

      var testPostQuery = `INSERT INTO messages (id, text, userId, roomId) VALUES (5, '${parsedData.text}', 2, 3)`;
      db.dbConnection.query(testPostQuery,(err, results, fields) => {
        if (err) {
          console.log(err);
        }
        console.log('INSERT RESULT IS: ', results);
      });
      // db.dbConnection.query = mysql.query(testPostQuery, (err, results, fields) => {
      //   if (err) {
      //     console.log(err);
      //   }
      //   console.log('INSERT RESULT IS: ', results);
      // });

      // db.dbConnection.connect((err) => {
      //   if (err) {
      //     console.log(`Error connecting to DB: ${err}`);
      //   } else {
      //     console.log('DB Connection established.');
      //   }
      // });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      // IF USER doesn't (in DB)
        // Add user to chats.users with a user ID
        // Put userId in message row
      // ELSE
        // Find user in chats.users to get user's ID
        // Put userId in message row
    }
  }
};
