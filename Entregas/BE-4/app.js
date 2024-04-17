const dbInitiate = require('./config/db/dbInitiate');
const app = require('./src/server');

dbInitiate();
app;