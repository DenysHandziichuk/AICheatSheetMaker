import { useCheatSheet } from "../context/CheatSheetContext";
import ReactMarkdown from "react-markdown";
import '../styles/ResultPage.css'

export default function ResultPage() {
  const { result, error } = useCheatSheet();

  if (error) {
    return <p classname="error">{error}</p>
  }

  return (
    <div className="result">
      <ReactMarkdown>{result}</ReactMarkdown>
    </div>
  );
}
