var express = require("express");

var router = express.Router();

// Import the model (grocery.js) to use its database functions.
var grocery = require("../models/grocery.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  grocery.all(function(data) {
    var hbsObject = {
      grocery: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/grocery", function(req, res) {
  grocery.create([
    "item", "in_basket"
  ], [
    req.body.name, req.body.in_basket
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/grocery/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  grocery.update({
    in_basket: req.body.in_basket
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/grocery/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  grocery.delete(condition, function(result) {
    console.log ("Result of delete:")
    console.log (result);
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/groceryall", function(req, res) {
  grocery.deleteall(function(result) {
    console.log ("Result of delete:")
    console.log (result);
    if (result.warningCount == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      res.status(200).end();
    } else {
      return res.status(404).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
