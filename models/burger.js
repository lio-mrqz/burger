var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers_db", function(res) {
        cb(res);
      });
    },
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers_db", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burger_db", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  module.exports = burger;
  