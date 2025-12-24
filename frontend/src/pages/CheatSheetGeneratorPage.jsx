import { useNavigate } from "react-router-dom";
import { useCheatSheet } from "../context/CheatSheetContext";
import TextareaInput from "../components/TextareaInput";
import GenerationSettings from "../components/GenerationSettings";
import GenerateButton from "../components/GenerateButton";
import '../styles/CheatSheetGeneratorPage.css';

export default function CheatSheetGeneratorPage() {
  const navigate = useNavigate();
  const { inputText, setInputText } = useCheatSheet();

  return (
    <div className="generator-container">
      <div className="panel">
        <div className="input-wrapper">
          <TextareaInput value={inputText} onChange={setInputText} />
        </div>
      </div>

      <div className="panel">
        <GenerationSettings />
        <div className="generate-btn-container">
          <GenerateButton
            onClick={() => navigate("/loading")}
            disabled={!inputText.trim()}
          />
        </div>
      </div>
    </div>
  );
}