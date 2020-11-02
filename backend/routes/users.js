var express = require('express');
var router = express.Router();
var db = require('../models/index.js')
var jwt = require('jsonwebtoken')
var dotenv = require('dotenv')

var User = db.User

dotenv.config()
/* GET users listing. */

router.post('/', function(req,res,next) {
  User.create({id: req.body.id, pw: req.body.pw, age: req.body.age,name: req.body.name, nickname: req.body.nickname, job: req.body.job}).then((data)=> {
    res.json({success: true, data})
  }).catch((err)=>{
    if(err) return res.json({success: false, err})
  })
})

router.post('/login', async function(req,res,next) {
  try{
    
    User.findByPk(req.body.id).then((data)=>{
      if(data && data.pw === req.body.pw){
        var payload = {
          id: data.id
        }
        var options = {expiresIn : 60 * 60 * 24}
        jwt.sign(payload, process.env.JWT_KEY, options, function(err,token) {
          if(err) return res.json({success : false})
          return res.send({ success: true, data: token})
        })

      } else {
        res.json({success : false, err: "패스워드 확인"})
      }
    })
  } catch (err) {
    res.json({success: false, err: "id확인"})
  }
})



module.exports = router;
