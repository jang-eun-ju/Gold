const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Portfolio', {
        index: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(100),
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
        id: {
            type: DataTypes.STRING(30),
            allowNull: false, 
            unique: true,
            reference: {
                model: 'User',
                key: 'id'
            }
        }
    },{
        tableName: 'Portfolio',
        timestamps: false
    })
}