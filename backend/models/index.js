var path=require('path')
var Sequelize=require('sequelize')

var env = process.env.NODE_ENV || 'development'
var config = require('../config/config.json')[env]
var db={};

var sequelize = new Sequelize(config.database, config.username, config.password, config)
db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.User=require('./User.js')(sequelize,Sequelize)
db.Portfolio=require('./Portfolio.js')(sequelize, Sequelize)
db.Contest=require('./Contest.js')(sequelize,Sequelize)
db.Team=require('./Team.js')(sequelize, Sequelize)
db.TeamMember=require('./TeamMember.js')(sequelize,Sequelize)


module.exports = db