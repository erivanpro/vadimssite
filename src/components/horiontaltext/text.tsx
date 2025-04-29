import './text.css';

export default function Text() {
  return (
    <div className="bar mt-12">
      <div className="bar_content">
        {[...Array(10)].map((_, i) => (
          <div className="bar_texts" key={i}>
            <div>Création des sites web et</div>
            <div>interfaces</div>
          </div>
        ))}
      </div>
    </div>
  );
}
