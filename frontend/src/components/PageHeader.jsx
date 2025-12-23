import { Link } from "react-router-dom";
import '../styles/PageHeader.css'

export default function PageHeader() {
  return (
    <header className="page-header">
      <Link to="/" className="logo">
        AI Cheat Sheet Maker
      </Link>
    </header>
  );
}
