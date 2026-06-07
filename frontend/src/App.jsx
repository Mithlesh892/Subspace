import { useState } from "react";
import DomainInput from "./components/DomainInput";
import StatusCard from "./components/StatusCard";
import ProgressBar from "./components/ProgressBar";
import LogsPanel from "./components/LogsPanel";
import SummaryCard from "./components/SummaryCard";

function App() {
  const [progress, setProgress] = useState(0);

  const [logs, setLogs] = useState([]);

  const [summary, setSummary] = useState({
    companies: 0,
    contacts: 0,
    emails: 0,
    sent: 0,
  });

  const [status, setStatus] = useState({
    ocean: {
      status: "idle",
      message: "Waiting",
    },
    prospeo: {
      status: "idle",
      message: "Waiting",
    },
    brevo: {
      status: "idle",
      message: "Waiting",
    },
    mongodb: {
      status: "idle",
      message: "Waiting",
    },
  });

  const addLog = (text) => {
    setLogs((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] ${text}`,
    ]);
  };

  const runPipeline = async (domain) => {
    addLog(`Pipeline started for ${domain}`);

    setStatus((s) => ({
      ...s,
      ocean: {
        status: "running",
        message: "Searching similar companies...",
      },
    }));

    setProgress(25);

    setTimeout(() => {
      setStatus((s) => ({
        ...s,
        ocean: {
          status: "success",
          message: "20 companies found",
        },
        prospeo: {
          status: "running",
          message: "Finding contacts...",
        },
      }));

      addLog("Ocean.io completed");

      setProgress(50);
    }, 2000);

    setTimeout(() => {
      setStatus((s) => ({
        ...s,
        prospeo: {
          status: "error",
          message: "Rate Limit Exceeded",
        },
      }));

      addLog("Prospeo failed: Rate limit exceeded");

      setProgress(60);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 ">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-4xl font-bold mb-6 font-mono">Auto Reachable</h1>

        <DomainInput onSubmit={runPipeline} />

        <div className="mt-6">
          <ProgressBar progress={progress} />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <StatusCard title="Ocean.io" {...status.ocean} />

          <StatusCard title="Prospeo" {...status.prospeo} />

          <StatusCard title="Brevo" {...status.brevo} />

          <StatusCard title="MongoDB" {...status.mongodb} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <LogsPanel logs={logs} />

          <SummaryCard summary={summary} />
        </div>
      </div>
    </div>
  );
}

export default App;
