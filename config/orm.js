var connection = require("./connection.js");
var tableInput = "burger";

var orm = {

	selectAll: function(tableInput, callback) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callback(result);
		});
	},

	insertOne: function(table, columns, values, callback) {
		var queryString = "INSERT INTO " + tableInput;

		queryString += " (";
	    queryString += cols.toString();
	    queryString += ") ";
	    queryString += "VALUES (";
	    queryString += printQuestionMarks(vals.length);
	    queryString += ") ";

	    connection.query(queryString, vals, function(err, result) {
      		if (err) {
        		throw err;
      		}
			callback(result);
		});
	},

	updateOne: function(table, objectColumnValuess, condition, callback) {
	    var queryString = "UPDATE " + tableInput;

	    queryString += " SET ";
	    queryString += objectColumnValuess;
	    queryString += " WHERE ";
	    queryString += condition;

	    connection.query(queryString, function(err, result) {
	      	if (err) {
	   			throw err;
	      	}

	   	   callback(result);
	    });
  	}
}

module.exports = orm;