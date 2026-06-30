const {DataTypes, STRING, Model} = require("sequelize");
const db = require("../db");

const Review = db.define("Review", {
    reviewer: {
        type: DataTypes.STRING,
        allowNull: false
    },

    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT,
    },
});

module.exports = Review;