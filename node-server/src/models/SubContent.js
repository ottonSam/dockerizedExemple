const { Model, DataTypes } = require('sequelize');

class SubContent extends Model {
    static init(sequelize) {
        super.init({
            sub_name: DataTypes.STRING,
            sub_type: DataTypes.STRING,
            sub_sch_id: DataTypes.INTEGER,
            sub_rem_id: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = SubContent;