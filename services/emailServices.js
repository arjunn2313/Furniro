const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Reusable function to send email
const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
            <header style="background-color: #f4f4f4; padding: 10px; text-align: center;">
              <h2 style="color: #333;">Welcome to <strong style="color: #6c63ff;">Furniro</strong></h2>
            </header>        
            <section style="padding: 20px;">
              <p style="font-size: 16px; color: #333;">Dear Customer,</p>
              <p style="font-size: 16px; color: #333;">${text}</p>
              <p style="font-size: 16px; color: #333;">Thank you for choosing Furniro for your furniture needs!</p>
            </section>
            
          </div>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

module.exports = sendEmail;
