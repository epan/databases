var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


exports.dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});


// exports.dbConnection.connect((err) => {
//   if (err) {
//     console.log(`Error connecting to DB: ${err}`);
//   } else {
//     console.log('DB Connection established.');
//   }
// });
//
// exports.dbConnection.query = mysql.query(query, callback);

// exports.dbConnection.end((err) => {
//   console.log('DB Connection ended.')
// });
