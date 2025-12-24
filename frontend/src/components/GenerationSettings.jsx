import { useCheatSheet } from "../context/CheatSheetContext"
import "../styles/GenerationSettings.css"

export default function GenerationSettings() {
  const { level, setLevel, length, setLength } = useCheatSheet()

  const levels = ["basic", "academic", "formal"]
  const lengths = ["short", "medium", "long"]

  return (
    <div className="settings-container">
      {/* Complexity */}
      <div className="setting-group">
        <span className="setting-title">Complexity Level</span>
        <div className="options-grid">
          {levels.map((l) => {
            const isActive = level === l

            return (
              <button
                key={l}
                type="button"
                className={`option-btn ${isActive ? "active" : ""}`}
                onClick={() => {
                  if (!isActive) setLevel(l)
                }}
                aria-pressed={isActive}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </button>
            )
          })}
        </div>
      </div>

      {/* Length */}
      <div className="setting-group">
        <span className="setting-title">Detailed Length</span>
        <div className="options-grid">
          {lengths.map((len) => {
            const isActive = length === len

            return (
              <button
                key={len}
                type="button"
                className={`option-btn ${isActive ? "active" : ""}`}
                onClick={() => {
                  if (!isActive) setLength(len)
                }}
                aria-pressed={isActive}
              >
                {len.charAt(0).toUpperCase() + len.slice(1)}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
