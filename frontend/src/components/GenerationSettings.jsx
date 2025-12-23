import { useCheatSheet } from "../context/CheatSheetContext";
import '../styles/GenerationSettings.css'

export default function GenerationSettings() {
  const { level, setLevel, length, setLength } = useCheatSheet();

  return (
    <div className="settings">
      <label>
        Level
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="basic">Basic</option>
          <option value="academic">Academic</option>
          <option value="formal">Formal</option>
        </select>
      </label>

      <label>
        Length
        <select value={length} onChange={(e) => setLength(e.target.value)}>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>
      </label>
    </div>
  );
}
