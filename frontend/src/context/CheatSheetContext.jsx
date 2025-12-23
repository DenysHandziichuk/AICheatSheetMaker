import { createContext, useContext, useState } from "react";

const CheatSheetContext = createContext(null);

export function CheatSheetProvider({ children }) {
  const [inputText, setInputText] = useState("");
  const [level, setLevel] = useState("academic");
  const [length, setLength] = useState("medium");

  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <CheatSheetContext.Provider
      value={{
        inputText,
        setInputText,
        level,
        setLevel,
        length,
        setLength,
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
  );
}

export function useCheatSheet() {
  const ctx = useContext(CheatSheetContext);
  if (!ctx) {
    throw new Error("useCheatSheet must be used inside CheatSheetProvider");
  }
  return ctx;
}
