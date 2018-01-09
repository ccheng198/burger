var orm = require("../config/orm.js");

var burg = {
	selectAll: function(callback) {
		orm.all("burgers", function(result) {
			callback(result);
		});
	},

	insertOne: function(columns, values, callback) {
		orm.create("burgers", columns, values, function(result) {
			callback(result);
		});
	},

	updateOne: function(objectColumnValues, condition, callback) {
		orm.update("burgers", objectColumnValues, condition, function(result) {
			callback(result);
		});
	}
};

module.exports = burg;