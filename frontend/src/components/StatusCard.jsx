const StatusCard = ({ title, status, message }) => {
  const icons = {
    idle: "⚪",
    running: "⏳",
    success: "✅",
    error: "❌",
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 border">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xl">{icons[status]}</span>
      </div>

      <p className="text-gray-600 mt-2">{message}</p>
    </div>
  );
};

export default StatusCard;
