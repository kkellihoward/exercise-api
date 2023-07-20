import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    email: {
		type: String,
		unique: true,
	},
	username: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	}
});

export default mongoose.model('Users', userSchema);
