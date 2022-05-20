import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

// Configuração do inbox do serviço mailtrap com o nodemailer
const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: process.env.USER,
		pass: process.env.PASS,
	},
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: "Feedget Team <support@feedget.com>",
			to: "Administrator <example@email.com>",
			subject,
			html: body,
		});
	}
}
