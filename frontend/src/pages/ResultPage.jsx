import { useCheatSheet } from "../context/CheatSheetContext";
import ReactMarkdown from "react-markdown";
import '../styles/ResultPage.css';

export default function ResultPage() {
  const { result, error } = useCheatSheet();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert("Copied to clipboard!");
  };

  if (error) return <div className="result-card error-text">{error}</div>;

  return (
    <div className="main-container-result">
        <div className="result-card">
      <div className="action-bar">
  <h1 className="generated-notification">
    Cheat Sheet Generated! 🎉
  </h1>

  <div className="action-right">
    <button className="try-again-btn">Try Again</button>
    <button
      className="action-icon-btn"
      onClick={copyToClipboard}
      title="Copy Content"
    >
      📋 Copy
    </button>
  </div>
</div>
      <div className="result-content">
        <ReactMarkdown>{result}</ReactMarkdown>
      </div>
    </div>
    </div>
    
  );
}