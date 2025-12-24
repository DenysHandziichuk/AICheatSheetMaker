import { Link } from "react-router-dom";
import { Lightbulb } from "@theme-toggles/react";
import "@theme-toggles/react/css/Lightbulb.css";
import "../styles/PageHeader.css";

export default function PageHeader({ theme, toggleTheme }) {
  return (
    <header className="page-header">
      <Link to="/" className="logo">
        AICheatSheet<span>Maker</span>
      </Link>

      <Lightbulb
        toggled={theme === "dark"}
        toggle={toggleTheme}
        duration={750}
        reverse
        className="lightbulb-toggle"
      />
    </header>
  );
}
