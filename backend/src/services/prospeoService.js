import axios from "axios";

export const getContacts = async (domain) => {
  try {
    const response = await axios.post(
      "https://api.prospeo.io/search-person",
      {
        page: 1,
        filters: {
          company_domain: {
            include: [domain],
          },
        },
      },
      {
        headers: {
          "X-KEY": process.env.PROSPEO_API_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Prospeo Error:", error.response?.data || error.message);

    return { people: [] };
  }
};
