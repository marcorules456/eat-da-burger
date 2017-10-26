// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'Thirdpi1',
		database: 'burger_db'
	})

// Make the connection to MySQL
connection.connect(function(err){
 if (err)  throw (err)

});
 


// Export connection for ORM use
module.exports = connection;
