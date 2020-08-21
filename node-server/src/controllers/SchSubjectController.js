const SchSubject = require('../models/SchSubject');

module.exports = {
    async index(req, res) {
        const schSubjects = await SchSubject.findAll();

        return res.json(schSubjects);
    },

    async store(req, res) {
        const { sch_name } = req.body;
        
        const schSubject = await SchSubject.create({ sch_name });

        return res.json(schSubject);
    },

    async clean(req, res) {
        const { id } = req.body;

        const schSubject = await SchSubject.destroy({ 
            where : {
                 id 
            }
        });

        return res.json({"delete school subject from id = " : id});
    }
};