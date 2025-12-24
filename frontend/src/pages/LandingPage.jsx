import { useNavigate } from "react-router-dom";
import '../styles/LandingPage.css'

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
  <h1>Turn any topic into a cheat sheet</h1>

  <p className="landing-subtitle">
    Instantly generate clean, structured cheat sheets for studying and quick revision.
  </p>

  <div className="landing-actions">
    <button
      className="get-started-btn"
      onClick={() => navigate("/generate")}
    >
      Get Started
    </button>
  </div>

  <div className="features">
  <div className="feature-card">
    <span className="feature-icon">⚡</span>
    <h3>Fast</h3>
    <p>Generate structured cheat sheets in seconds.</p>
  </div>

  <div className="feature-card">
    <span className="feature-icon">⚙️</span>
    <h3>Customizable</h3>
    <p>Adjust level, topic, and format to your needs.</p>
  </div>

  <div className="feature-card">
    <span className="feature-icon">📋</span>
    <h3>Ready to Use</h3>
    <p>Copy, revise, and study instantly.</p>
  </div>
</div>
</div>

  );
}
