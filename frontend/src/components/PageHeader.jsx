import { Link } from "react-router-dom";
import '../styles/PageHeader.css';

export default function PageHeader({ theme, toggleTheme }) {
  return (
    <header className="page-header">
      <Link to="/" className="logo">
        AICheatSheet<span>Maker</span>
      </Link>
      
      <button 
  className={`theme-toggler ${theme}`} 
  onClick={toggleTheme}
>
  <div className="sun-moon"></div>
</button>
    </header>
  );
}