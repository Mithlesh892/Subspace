const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 h-3 rounded-full">
      <div
        className="h-3 rounded-full transition-all"
        style={{
          width: `${progress}%`,
          background: "#22c55e",
        }}
      />
    </div>
  );
};

export default ProgressBar;
