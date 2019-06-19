var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers_db", function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.create("burgers_db", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burger_db", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("burger_db", condition, function(res) {
        cb(res);
      });
    }
  };
  
  module.exports = burger;
  