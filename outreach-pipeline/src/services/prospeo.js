const axios = require("axios");

async function findDecisionMakers(domain) {
  try {
    const response = await axios.post(
      "PROSPEO_ENDPOINT",
      {
        domain,
      },
      {
        headers: {
          "X-API-KEY": process.env.PROSPEO_API_KEY,
        },
      },
    );

    return response.data;
  } catch (error) {
    return [];
  }
}

module.exports = findDecisionMakers;
