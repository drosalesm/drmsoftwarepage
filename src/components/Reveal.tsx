import  { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface RevealProps {
  children: ReactNode;
}

const Reveal = ({ children }: RevealProps) => {
  const { ref, inView } = useInView({
    // Change this line
    triggerOnce: false, // Animate every time it enters view
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'active' : ''}`}
    >
      {children}
    </div>
  );
};

export default Reveal;