const { Model, DataTypes } = require('sequelize');

class SubContent extends Model {
    static init(sequelize) {
        super.init({
            sub_name: DataTypes.STRING,
            sub_type: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.SchSubject, { foreignKey: 'sub_sch_id', as: 'sch_content'});
        this.belongsTo(models.RemMonths, { foreignKey: 'sub_rem_id', as : 'rem_content'});
    }
}

module.exports = SubContent;