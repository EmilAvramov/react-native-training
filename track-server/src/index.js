require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRoutes');
const trackRouter = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(authRouter);
app.use(trackRouter);

app.get('/', requireAuth, (req, res) => {
	res.send(`Your email: ${req.user.email}`);
});

const mongoConnection =
	'mongodb+srv://admin:passwordpassword@react-native-training.sddsz5i.mongodb.net/';

mongoose.connect(mongoConnection);

mongoose.connection.on('connected', () => {
	console.log('Connected to Mongo Instance');
});

mongoose.connection.on('error', (err) => {
	console.log('Error connecting to mongoDB', err);
});

app.listen(port, () => {
	console.log(`Server listening to port ${port}`);
});
