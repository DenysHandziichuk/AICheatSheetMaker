import { useCheatSheet } from "../context/CheatSheetContext";
import ReactMarkdown from "react-markdown";
import '../styles/ResultPage.css';
import { useNavigate } from "react-router-dom"


export default function ResultPage() {
  const navigate = useNavigate()
  const { result, error } = useCheatSheet();

  const copyToClipboard = async () => {
  if (!result) return

  try {
    await navigator.clipboard.writeText(result)
    alert("Copied to clipboard!")
  } catch {
    alert("Failed to copy")
  }
}

  

  const tryAgain = () => {
    navigate("/generate")
  }


  if (error) return <div className="result-card error-text">{error}</div>;

  return (
    <div className="main-container-result">
        <div className="result-card">
      <div className="action-bar">
  <h1 className="generated-notification">
    Cheat Sheet Generated! 🎉
  </h1>

  <div className="action-right">
    <button className="try-again-btn" onClick={tryAgain}>
      Try Again
    </button>

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