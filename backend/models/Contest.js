const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Contest', {
        index: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        contestUserId: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            reference:{
                model: "User",
                key: "id"
            }
        }
    },{
        tableName: 'Contest',
        timestamps: false
    })
}