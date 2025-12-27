import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import PageHeader from './PageHeader';
import '../styles/AppLayout.css';

export default function AppLayout() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-layout">
      <PageHeader theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
