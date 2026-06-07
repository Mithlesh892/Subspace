import { getSimilarCompanies } from "../services/oceanService.js";
import { getContacts } from "../services/prospeoService.js";

export const runPipeline = async (domain) => {
  // Sirf 1 company process karega
  const companies = (await getSimilarCompanies(domain)).slice(0, 1);

  const summary = [];

  for (const item of companies) {
    const domainName = item.company?.domain;

    console.log("Domain:", domainName);

    if (!domainName) continue;

    // Rate limit bachane ke liye 2 sec delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result = await getContacts(domainName);

    const people = result.people || result.results || [];

    for (const person of people) {
      summary.push({
        company: domainName,
        name: person.full_name || person.name || "Unknown",
        email: person.email || "Not Found",
      });
    }
  }

  return summary;
};
