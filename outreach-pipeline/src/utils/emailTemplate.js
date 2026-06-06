function generateEmail(name, company) {
  return `
Hi ${name},

I came across ${company} and was impressed by the work your team is doing.

We help companies streamline lead generation and outreach through automation, allowing teams to focus more on closing opportunities rather than manual prospecting.

I would love to explore whether this could also be valuable for ${company}.

Would you be open to a brief conversation?

Best regards,
Mithlesh Kumar
`;
}

module.exports = generateEmail;
