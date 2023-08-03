import nodemailer from "nodemailer";

export async function getTransporter() {
	try {
		const transporter = nodemailer.createTransport({
			service: "smtp.gmail.com",
			port: 587,
			auth: {
				
				user: 'bigproject4331@gmail.com',
				pass: 'Ksue123!'
			}
		});
		
		return transporter;

	} catch (error) {

		console.log("Internal server error while creating nodemailer transporter:", error.message);
		return null;
	}
}
