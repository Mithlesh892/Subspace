import { runPipeline } from "../jobs/runPipeline.js";
import { sendEmail } from "../services/brevoService.js";

export const runPipelineController = async (req, res) => {
  try {
    const { domain } = req.body;

    const contacts = await runPipeline(domain);

    res.status(200).json({
      success: true,
      totalContacts: contacts.length,
      contacts,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const sendEmailsController = async (req, res) => {
  try {
    const { contacts } = req.body;

    for (const contact of contacts) {
      await sendEmail(contact.email, contact.name, contact.company);
    }

    res.status(200).json({
      success: true,
      message: "Emails Sent Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
