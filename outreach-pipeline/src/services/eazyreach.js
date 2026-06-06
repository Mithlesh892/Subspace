const axios = require("axios");

async function getEmail(linkedinUrl) {
  try {
    const response = await axios.post(
      "EAZYREACH_ENDPOINT",
      {
        linkedin_url: linkedinUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.EAZYREACH_API_KEY}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    return null;
  }
}

module.exports = getEmail;
