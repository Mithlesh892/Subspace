import axios from "axios";

export const sendEmail = async (email, name, company) => {
  try {
    const payload = {
      sender: {
        email: process.env.SENDER_EMAIL,
        name: process.env.SENDER_NAME,
      },

      to: [
        {
          email,
          name,
        },
      ],

      subject: `Quick Question About ${company}`,

      htmlContent: `
        <html>
          <body>
            <p>Hi ${name},</p>

            <p>
              I came across ${company} and wanted to connect.
            </p>

            <p>
              We help companies improve their outreach process.
            </p>

            <p>
              Interested in a quick chat?
            </p>

            <br/>

            <p>
              Regards,<br/>
              ${process.env.SENDER_NAME}
            </p>
          </body>
        </html>
      `,
    };

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      payload,
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    );

    console.log("Email Sent:", response.data);

    return response.data;
  } catch (error) {
    console.error("Brevo Error:", error.response?.data || error.message);
    throw error;
  }
};
