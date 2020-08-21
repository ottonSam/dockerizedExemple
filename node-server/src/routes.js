const express = require('express');
const SchSubjectController = require('./controllers/SchSubjectController');
const RemMonthController = require('./controllers/RemMonthController');
const SubContentController = require('./controllers/SubContentController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ hello: 'Hey bro you shouldnt be here' });
})

routes.post('/schsubject', SchSubjectController.store);
routes.get('/schsubject', SchSubjectController.index);
routes.delete('/schsubject', SchSubjectController.clean);

routes.post('/remmonth', RemMonthController.store);
routes.get('/remmonth', RemMonthController.index);
routes.delete('/remmonth', RemMonthController.clean);

routes.post('/subcontent', SubContentController.store);
routes.get('/subcontent', SubContentController.index);
routes.delete('/subcontent', SubContentController.clean);


module.exports = routes;