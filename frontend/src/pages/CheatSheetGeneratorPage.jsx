import { useNavigate } from "react-router-dom"
import { useCheatSheet } from "../context/CheatSheetContext"
import TextareaInput from "../components/TextareaInput"
import GenerationSettings from "../components/GenerationSettings"
import GenerateButton from "../components/GenerateButton"
import "../styles/CheatSheetGeneratorPage.css"


export default function CheatSheetGeneratorPage() {
  const navigate = useNavigate()
  const { inputText, hasSettingsChanged, setInputText } = useCheatSheet()

  const hasInput = inputText.trim().length > 0

  let currentStep = 0
  let progressPercent = 0
  let stepLabel = "Start"

  if (hasInput) {
    currentStep = 1
    progressPercent = 33
    stepLabel = "Topic"
  }

  if (hasInput) {
  currentStep = 2
  progressPercent = 66
  stepLabel = "Review settings (optional)"
}

  return (
    <div className="generator-container">
      {/* Progress */}
      <div className="generator-progress">
        <div className="progress-top">
          <span className="progress-title">
            {currentStep === 0
              ? "Not started"
              : `Step ${currentStep} of 3`}
          </span>
          <span className="progress-label">{stepLabel}</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="progress-steps">
          <span className={`step ${currentStep >= 1 ? "active" : ""}`}>
            Topic
          </span>
          <span className={`step ${currentStep >= 2 ? "active" : ""}`}>
            Settings
          </span>
          <span className={`step ${currentStep >= 3 ? "active" : ""}`}>
            Generate
          </span>
        </div>
      </div>

      {/* Input */}
      <div className="panel">
        <TextareaInput 
        value={inputText}
        onChange={setInputText}
        />
      </div>

      {/* Settings */}
      <div className="panel">
        <GenerationSettings />
        <div className="generate-btn-container">
          <GenerateButton
            onClick={() => navigate("/loading")}
            disabled={!hasInput}
          />
        </div>
      </div>
    </div>
  )
}
