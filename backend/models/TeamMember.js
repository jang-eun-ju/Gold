const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('TeamMember', {
        memId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            reference:{
                model: "User",
                key: "id"
            }
        },
        teamIndex: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
            reference:{
                model: "Team",
                key: "index"
            }
        }
    },{
        tableName: 'TeamMember',
        timestamps: false
    })
}