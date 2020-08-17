const { Model, DataTypes } = require('sequelize');

class SchSubject extends Model {
    static init(sequelize) {
        super.init({
            sch_name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = SchSubject;