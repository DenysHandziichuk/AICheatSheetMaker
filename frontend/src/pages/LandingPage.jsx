import { useNavigate } from "react-router-dom";
import '../styles/LandingPage.css'

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Turn any topic into a cheat sheet</h1>
      <button onClick={() => navigate("/generate")}>
        Get Started
      </button>
    </div>
  );
}
