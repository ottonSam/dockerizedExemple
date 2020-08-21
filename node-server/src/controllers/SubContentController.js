const SubContent = require('../models/SubContent');

module.exports = {
    async index(req, res) {
        const subContent = await SubContent.findAll();

        return res.json(subContent);
    },

    async store(req, res) {
        const { sub_name, sub_type, sub_sch_id, sub_rem_id } = req.body;
        
        const subContent = await SubContent.create({ sub_name, sub_type, sub_sch_id, sub_rem_id });

        return res.json(subContent);
    },

    async clean(req, res) {
        const { id } = req.body;

        const subContent = await SubContent.destroy({ 
            where : {
                 id 
            }
        });

        return res.json({"delete subject content from id = " : id});
    }
};