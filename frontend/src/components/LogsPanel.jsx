const LogsPanel = ({ logs }) => {
  return (
    <div className="bg-black text-green-400 p-4 rounded-xl h-72 overflow-y-auto font-mono">
      {logs.map((log, index) => (
        <p key={index}>{log}</p>
      ))}
    </div>
  );
};

export default LogsPanel;
