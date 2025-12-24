import { useCheatSheet } from "../context/CheatSheetContext";
import '../styles/GenerationSettings.css';

export default function GenerationSettings() {
  const { level, setLevel, length, setLength } = useCheatSheet();

  const levels = ['basic', 'academic', 'formal'];
  const lengths = ['short', 'medium', 'long'];

  return (
    <div className="settings-container">
      <div className="setting-group">
        <span className="setting-title">Complexity Level</span>
        <div className="options-grid">
          {levels.map(l => (
            <button 
              key={l}
              className={`option-btn ${level === l ? 'active' : ''}`}
              onClick={() => setLevel(l)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="setting-group">
        <span className="setting-title">Detailed Length</span>
        <div className="options-grid">
          {lengths.map(len => (
            <button 
              key={len}
              className={`option-btn ${length === len ? 'active' : ''}`}
              onClick={() => setLength(len)}
            >
              {len.charAt(0).toUpperCase() + len.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}