import nodemailer from "nodemailer";

export async function getTransporter() {
	try {
		const transporter = nodemailer.createTransport({
			service:"Gmail",
			auth: {
				
				user: 'bigproject4331@gmail.com',
				pass: 'fjvobsumlxcpyify'
			}
		});
		
		return transporter;

	} catch (error) {

		console.log("Internal server error while creating nodemailer transporter:", error.message);
		return null;
	}
}
