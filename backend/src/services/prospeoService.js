import axios from "axios";

// Delay function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getContacts = async (domain) => {
  try {
    // Wait for 2 seconds before making the API call
    await delay(2000);

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
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Prospeo Error:",
      error.response?.data || error.message
    );

    return { people: [] };
  }
};

// Example Usage
(async () => {
  const contacts = await getContacts("google.com");
  console.log(contacts);
})();
