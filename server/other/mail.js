import nodemailer from "nodemailer";

export async function getTransporter() {
	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				
				user: 'bigproject4331@gmail.com',
				pass: 'plkcxjwbboxnlzuq'
			}
		});
		
		return transporter;

	} catch (error) {

		console.log("Internal server error while creating nodemailer transporter:", error.message);
		return null;
	}
}
