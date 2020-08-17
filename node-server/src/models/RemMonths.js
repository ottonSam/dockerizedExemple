const { Model, DataTypes } = require('sequelize');

class RemMonths extends Model {
    static init(sequelize) {
        super.init({
            rem_date: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = RemMonths;