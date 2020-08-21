const RemMonth = require('../models/RemMonths');

module.exports = {
    async index(req, res) {
        const remMonths = await RemMonth.findAll();

        return res.json(remMonths);
    },

    async store(req, res) {
        const { rem_date } = req.body;
        
        const remMonth = await RemMonth.create({ rem_date });

        return res.json(remMonth);
    },

    async clean(req, res) {
        const { id } = req.body;

        const remMonth = await RemMonth.destroy({ 
            where : {
                 id 
            }
        });

        return res.json({"delete month from id = " : id});
    }
};