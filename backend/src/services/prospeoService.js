import axios from "axios";

// Delay helper
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getContacts = async (domain, retries = 3) => {
  try {
    // Delay before every request
    await delay(5000);

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
    const status = error.response?.status;

    console.error(
      `Prospeo Error for ${domain}:`,
      error.response?.data || error.message
    );

    // Handle Rate Limit (429)
    if (status === 429 && retries > 0) {
      console.log(
        `Rate limit exceeded. Retrying in 60 seconds... (${retries} retries left)`
      );

      await delay(60000); // Wait 60 seconds

      return getContacts(domain, retries - 1);
    }

    return { people: [] };
  }
};

// Example usage
const domains = [
  "google.com",
  "microsoft.com",
  "amazon.com",
];

(async () => {
  for (const domain of domains) {
    console.log(`Processing: ${domain}`);

    const contacts = await getContacts(domain);

    console.log(
      `${domain}: Found ${contacts.people?.length || 0} contacts`
    );

    // Extra delay between domains
    await delay(5000);
  }

  console.log("All domains processed.");
})();
