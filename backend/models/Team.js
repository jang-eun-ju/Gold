const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Team', {
        index: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        TeamName: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        number: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        leaderId: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            reference:{
                model: "User",
                key: "id"
            }
        }
    },{
        tableName: 'Team',
        timestamps: false
    })
}