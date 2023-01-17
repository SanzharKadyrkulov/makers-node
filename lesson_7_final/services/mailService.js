const nodemailer = require("nodemailer");

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API } = process.env;

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: "testting20092021@gmail.com",
        pass: "Testting20092021!",
      },
    });
  }
  async sendActivation(to, link) {
    await this.transporter.sendMail({
      from: "testting20092021@gmail.com",
      to,
      subject: "Account activation on" + API,
      text: "",
      html: `
        <h1>Click to link to activate account</h1>
        <a href="${link}">${link}</a>
      `,
    });
  }
}

module.exports = new MailService();
