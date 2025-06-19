import { useState } from 'react';

type TechDataType = {
  name: string;
  icon: string;
  description: string;
};

// The props for this component will be a single 'tech' object
interface TechCardProps {
  tech: TechDataType;
}

const TechnologyCard = ({ tech }: TechCardProps) => {
  // 1. Each card manages its own open/closed state.
  const [isOpen] = useState(false);

 

  return (
    // 3. Add a dynamic class 'is-open' when the state is true.
    <div className={`feature-card ${isOpen ? 'is-open' : ''}`}>
      <div className="card-main-content">
        <div className="feature-icon">{tech.icon}</div>
        <h3>{tech.name}</h3>
      </div>
      
      {/* 4. Conditionally render the description with an animation class. */}
      {isOpen && (
        <p className="card-description">{tech.description}</p>
      )}


    </div>
  );
};

export default TechnologyCard;