require("dotenv").config();

const findLookalikeCompanies = require("./services/ocean");

const findDecisionMakers = require("./services/prospeo");

const getEmail = require("./services/eazyreach");

const sendEmail = require("./services/brevo");

const generateEmail = require("./utils/emailTemplate");

const domain = process.argv[2];

async function run() {
  const companies = await findLookalikeCompanies(domain);

  for (const company of companies) {
    const contacts = await findDecisionMakers(company.domain);

    for (const person of contacts) {
      const email = await getEmail(person.linkedin_url);

      if (!email) continue;

      const body = generateEmail(person.name, company.name);

      await sendEmail(email, person.name, body);
    }
  }
}

run();
