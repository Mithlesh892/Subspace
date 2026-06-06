const axios = require("axios");

async function sendEmail(email, name, body) {
  await axios.post(
    "BREVO_ENDPOINT",
    {
      sender: {
        email: process.env.FROM_EMAIL,
      },

      to: [
        {
          email,
          name,
        },
      ],

      subject: "Partnership Opportunity",

      htmlContent: body,
    },
    {
      headers: {
        "api-key": process.env.BREVO_API_KEY,
      },
    },
  );
}

module.exports = sendEmail;
