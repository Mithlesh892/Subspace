import { useState } from "react";

const DomainInput = ({ onSubmit }) => {
  const [domain, setDomain] = useState("");

  const handleSubmit = () => {
    if (!domain) return;

    onSubmit(domain);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="openai.com"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="h-12 p-2 mt-2 border border-gray-500/30 rounded outline-none focus:border-indigo-300 text-sm font-medium"
      />

      <button
        className="h-12 px-6 py-2 active:scale-95 transition bg-blue-500 rounded text-white shadow-lg shadow-blue-500/30 text-sm font-medium ml-3"
        onClick={handleSubmit}
      >
        Run Pipeline
      </button>
    </div>
  );
};

export default DomainInput;
