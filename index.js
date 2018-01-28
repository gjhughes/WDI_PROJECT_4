const express = require('express');
const app     = express();

const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.plugin(require('mongoose-unique-validator'));

const morgan               = require('morgan');
const bodyParser           = require('body-parser');

const router               = require('./config/routes');
const errorHandler         = require('./lib/errorHandler');
const customResponses      = require('./lib/customResponses');
const priceTracker         = require('./lib/priceTracker');
const { port, dbURI, env } = require('./config/environment');

mongoose.connect(dbURI, { useMongoClient: true });

if('test' !== env) app.use(morgan('dev'));


app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use('/api', router);
app.use(customResponses);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));


app.use(errorHandler);


app.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
