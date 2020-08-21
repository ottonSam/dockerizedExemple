module.exports = {
    dialect: 'postgres',
    host: 'postgres-db',
    username: 'postgres',
    password: 'postgres',
    database: 'enem_schedule',
    define: {
        timestamps: true,
        underscored: true,
    },
};