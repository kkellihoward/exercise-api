import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './server/routes/users.js';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.use('/user/signin', (req, res) => {
// 	const { email, password } = req.body;
// 	res.status(200).send({message: "I recieved an API call " + email + ' ' + password})
// });

app.use('/user/verify-email', (req, res) => 
	try {

		const { verificationToken } = req.body;

		const payload = jwt.verify(verificationToken, process.env.JWT_SECRET);
		if (!payload.email) return res.status(401).json({ message: "Invalid verification token." });

		const user = await UserModal.findOne({ email: payload.email });
		if (!user) return res.status(400).json({ message: "Email not registered." });

		user.isVerified = true;
		await user.save();

		return res.status(200).json({ message: "Successfully verified email." });

	} catch (error) {

		console.log("Internal server error while verifying email:", error.message);
		return res.status(500).json({ message: "Internal server error: " + error.message });
	}
});

app.get('/', (req, res) => {
	res.send('Yay');
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
