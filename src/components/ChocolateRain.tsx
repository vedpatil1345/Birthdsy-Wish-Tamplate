import React, { useEffect, useState } from 'react';

import chocolate from '../assets/chocolate.svg';

interface Chocolate {
  id: number;
  left: number;
  size: number;
  duration: number;
  rotation: number;
}

const ChocolateRain: React.FC = () => {
  const [chocolates, setChocolates] = useState<Chocolate[]>([]);
  
  // Chocolate shapes as components
  const ChocolateShape: React.FC<{ rotation: number }> = ({ rotation }) => {
    
    
    return (
      <><img src={chocolate} alt="" className={`absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 ${rotation === 0 ? 'rotate-0' : rotation === 90 ? 'rotate-90' : rotation === 180 ? 'rotate-180' : rotation === 270 ? 'rotate-270' : ''}`} />
      </>
    );
  };

  useEffect(() => {
    const newChocolates: Chocolate[] = [];
    
    for (let i = 0; i < 30; i++) {
      newChocolates.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 20 + 15,
        duration: Math.random() * 5 + 5,
        rotation: Math.random() * 360,
      });
    }
    
    setChocolates(newChocolates);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {chocolates.map((chocolate) => (
        <div
          key={chocolate.id}
          className="absolute animate-fall"
          style={{
            left: `${chocolate.left}%`,
            width: `${chocolate.size}px`,
            height: `${chocolate.size}px`,
            animationDuration: `${chocolate.duration}s`,
            animationIterationCount: 'infinite'
          }}
        >
          <ChocolateShape rotation={chocolate.rotation} />
        </div>
      ))}
    </div>
  );
};

export default ChocolateRain;