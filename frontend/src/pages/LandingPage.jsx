import { useNavigate } from "react-router-dom";
import '../styles/LandingPage.css'

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Turn any topic into a cheat sheet</h1>
      <button onClick={() => navigate("/generate")} className="get-started-btn">
        Get Started
      </button>
    </div>
  );
}
