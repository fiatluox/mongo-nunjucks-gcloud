var express = require('express');
var Work = require('../../../db/models/moma/work.js');

function findWorks(req, res) {
  Work.find(function(err, works) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(works);
    }
  });
}

module.exports = findWorks;