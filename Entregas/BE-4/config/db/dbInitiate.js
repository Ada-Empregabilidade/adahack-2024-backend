const sequelize = require('./db.connect');
const dbSync = require('./db.sync');

async function dbInitiate() {
    const newDbConections = await sequelize;
    const newDbSync = await dbSync();
};

module.exports = dbInitiate;