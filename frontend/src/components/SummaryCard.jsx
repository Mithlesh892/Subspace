const SummaryCard = ({ summary }) => {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      <h2 className="text-xl font-bold mb-4">Pipeline Summary</h2>

      <div className="space-y-2">
        <p>Companies Found: {summary.companies}</p>
        <p>Contacts Found: {summary.contacts}</p>
        <p>Emails Found: {summary.emails}</p>
        <p>Emails Sent: {summary.sent}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
