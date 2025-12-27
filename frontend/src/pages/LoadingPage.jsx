import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from '../components/Skeleton';
import { useCheatSheet } from '../context/CheatSheetContext';
import '../styles/LoadingPage.css';

export default function LoadingPage() {
  const navigate = useNavigate();
  const hasRun = useRef(false);

  const {
    inputText,
    setInputText,
    level,
    length,
    setResult,
    setIsLoading,
    setError,
  } = useCheatSheet();

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    if (!inputText.trim()) {
      navigate('/generate');
      return;
    }

    async function generateCheatSheet() {
      try {
        setIsLoading(true);

        const response = await fetch('http://localhost:3001/cheatsheet', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: inputText,
            level,
            length,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to generate cheat sheet');
        }

        const data = await response.json();

        setResult(data.result);
        setInputText('');
        navigate('/result');
      } catch (err) {
        setError(err.message || 'Something went wrong');
        navigate('/result');
      } finally {
        setIsLoading(false);
      }
    }

    generateCheatSheet();
  }, []);

  return (
    <div className="loading-page">
      <Skeleton />
      <p className="loading-text">Generating cheat sheet…</p>
      <span class="loader"></span>
    </div>
  );
}
