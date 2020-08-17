const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const SchSubject = require('../models/SchSubject');
const RemMonths = require('../models/RemMonths');
const SubContent = require('../models/SubContent');

const connection = new Sequelize(dbConfig);

SchSubject.init(connection);
RemMonths.init(connection);
SchSubject.init(connection);

module.exports = connection;