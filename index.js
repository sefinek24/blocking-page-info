require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('node:path');
const logger = require('./middlewares/morgan.js');
const timeout = require('./middlewares/timeout.js');
const favicon = require('./middlewares/modules/favicon.js');
const app = express();

app.set('trust proxy', 1);

app.use(cors());
app.use(helmet({ crossOriginEmbedderPolicy: false, crossOriginResourcePolicy: false }));
app.use(logger);
app.use(timeout());
app.use(express.static('public'));
app.use(favicon(__dirname + '/public/favicon.png'));


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'html', 'index.html'));
});


app.listen(process.env.PORT, () => {
	console.log(`App listening at http://127.0.0.1:${process.env.PORT}`);
});