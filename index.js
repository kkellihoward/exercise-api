import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './server/routes/users.js';

const app = express();
app.use(cors());

app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));


app.get('/', (req, res) => {
	res.send('Yay');
});

app.use('/', (req, res, next) => {
	res.send('I recieved: ', req.query);
});

app.use('/user', userRoutes);

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
    		console.log('connected to database and listening on port', process.env.PORT);
		});
	})
	.catch((error) => {
		console.log(error)
});
