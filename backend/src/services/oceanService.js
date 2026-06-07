import axios from "axios";

export const getSimilarCompanies = async (domain) => {
  try {
    const response = await axios.post(
      "https://api.ocean.io/v3/search/companies",
      {
        size: 20,
        companiesFilters: {
          lookalikeDomains: [domain],
          excludeDomains: [domain],
        },
      },
      {
        headers: {
          "X-Api-Token": process.env.OCEAN_API_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data.companies || [];
  } catch (error) {
    console.error("Ocean Error:", error.response?.data || error.message);

    return [];
  }
};
