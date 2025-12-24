import { createContext, useContext, useState } from "react"

const CheatSheetContext = createContext(null)

const DEFAULT_LEVEL = "academic"
const DEFAULT_LENGTH = "medium"

export function CheatSheetProvider({ children }) {
  const [inputText, setInputText] = useState("")
  const [level, setLevel] = useState(DEFAULT_LEVEL)
  const [length, setLength] = useState(DEFAULT_LENGTH)

  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const hasSettingsChanged =
    level !== DEFAULT_LEVEL || length !== DEFAULT_LENGTH

  return (
    <CheatSheetContext.Provider
      value={{
        inputText,
        setInputText,
        level,
        setLevel,
        length,
        setLength,
        hasSettingsChanged,
        result,
        setResult,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </CheatSheetContext.Provider>
  )
}

export function useCheatSheet() {
  const ctx = useContext(CheatSheetContext)
  if (!ctx) {
    throw new Error("useCheatSheet must be used inside CheatSheetProvider")
  }
  return ctx
}
