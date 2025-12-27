import '../styles/TextareaInput.css';

export default function TextareaInput({ value, onChange }) {
  return (
    <textarea
      className="textarea"
      placeholder="Enter topic or paste notes…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={6}
    />
  );
}
