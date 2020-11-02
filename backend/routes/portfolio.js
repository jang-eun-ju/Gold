var express = require('express');
var router = express.Router();
var db = require('../models/index.js')
var async = require('async')
var jwt = require('jsonwebtoken')
var dotenv = require('dotenv')

var Portfolio = db.Portfolio;

dotenv.config()
/* GET users listing. */





router.get('/list/my', function (req, res, next){
  var token = req.headers['x-access-token']
  jwt.verify(token, process.env.JWT_KEY, async function (err, decoded) {
    if(err) return res.json({success: false, err})
    else{
      var values = {
        id: decoded.id
      }
      var result = []
      var query = 'select index, title, date from Portfolio where id = :id order by index'
      const data = await db.sequelize.query(query, { replacements: values })
      for(var s of data){
        result.push({
          index: s.index,
          title: s.title,
          date: s.date
        })
      }
      res.json({ success : true, data : result })
    }
  })
})



module.exports = router;
