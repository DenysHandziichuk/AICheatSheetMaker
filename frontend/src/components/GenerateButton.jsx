import '../styles/GenerateButton.css';

export default function GenerateButton({ onClick, disabled }) {
  return (
    <button className="generate-button" onClick={onClick} disabled={disabled}>
      Generate
    </button>
  );
}
