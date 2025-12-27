import '../styles/Skeleton.css';

export default function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton-title" />

      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="skeleton-section">
          <div className="skeleton-section-title" />
          <div className="skeleton-line" />
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
        </div>
      ))}
    </div>
  );
}
