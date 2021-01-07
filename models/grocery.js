// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var grocery = {
  all: function(cb) {
    orm.all("grocery_list", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("grocery_list", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("grocery_list", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("grocery_list", condition, function(res) {
      cb(res);
    });
  }

};

// Export the database functions for the controller (groceryController.js).
module.exports = grocery;
