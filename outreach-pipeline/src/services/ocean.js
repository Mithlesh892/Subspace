const axios = require("axios");

async function findLookalikeCompanies(domain) {
  try {
    const response = await axios.post(
      "OCEAN_ENDPOINT",
      {
        domain,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OCEAN_API_KEY}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.log(error.message);

    return [];
  }
}

module.exports = findLookalikeCompanies;
