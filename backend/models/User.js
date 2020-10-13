const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.STRING(30),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        pw: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        job: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },{
        tableName: 'User',
        timestamps: false
    })
}