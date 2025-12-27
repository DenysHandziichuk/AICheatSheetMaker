import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';

import LandingPage from './pages/LandingPage';
import CheatSheetGeneratorPage from './pages/CheatSheetGeneratorPage';
import LoadingPage from './pages/LoadingPage';
import ResultPage from './pages/ResultPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/generate" element={<CheatSheetGeneratorPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Route>
    </Routes>
  );
}
