import { useNavigate } from "react-router-dom";
import { useCheatSheet } from "../context/CheatSheetContext";
import TextareaInput from "../components/TextareaInput";
import GenerationSettings from "../components/GenerationSettings";
import GenerateButton from "../components/GenerateButton";
import '../styles/CheatSheetGeneratorPage.css'

export default function CheatSheetGeneratorPage() {
  const navigate = useNavigate();
  const { inputText, setInputText } = useCheatSheet();

  return (
    <div>
      <TextareaInput value={inputText} onChange={setInputText} />
      <GenerationSettings />
      <GenerateButton
        onClick={() => navigate("/loading")}
        disabled={!inputText.trim()}
      />
    </div>
  );
}
