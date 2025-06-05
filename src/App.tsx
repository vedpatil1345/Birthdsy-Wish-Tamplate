import ChocolateBox from './components/ChocolateBox';
import choco from './assets/chocolate-1.svg';
import React from 'react';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.png';


const ChocolateDripBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full pointer-events-none z-50">
      {/* Main chocolate bar */}
      <div className="w-full h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-700 shadow-lg relative">
        {/* Glossy highlight */}
        <div className="absolute top-0 left-0 w-full h-2 sm:h-3 md:h-4 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-60"></div>
        
        {/* Dripping chocolate edge */}
        <svg 
          className="absolute bottom-0 w-full h-6 sm:h-8 md:h-10 lg:h-12" 
          viewBox="0 0 1200 80" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L0,15 Q30,35 60,20 Q90,45 120,25 Q150,50 180,30 Q210,40 240,25 Q270,55 300,35 Q330,45 360,30 Q390,50 420,35 Q450,60 480,40 Q510,45 540,30 Q570,55 600,40 Q630,50 660,35 Q690,45 720,30 Q750,55 780,40 Q810,50 840,35 Q870,45 900,30 Q930,50 960,35 Q990,55 1020,40 Q1050,45 1080,30 Q1110,50 1140,35 Q1170,40 1200,30 L1200,0 Z"
            fill="url(#chocolateGradient)"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="chocolateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="30%" stopColor="#A0522D" />
              <stop offset="70%" stopColor="#654321" />
              <stop offset="100%" stopColor="#4A2C17" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Individual dripping drops */}
        <div className="absolute bottom-0 w-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-full animate-bounce shadow-sm"
              style={{
                left: `${8 + i * 7}%`,
                width: `${6 + Math.random() * 4}px`,
                height: `${15 + Math.random() * 25}px`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${2.5 + Math.random() * 1.5}s`,
                transform: `translateY(${Math.random() * 8}px)`
              }}
            />
          ))}
        </div>
        
        {/* Additional smaller drops for mobile */}
        <div className="absolute bottom-0 w-full sm:hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={`mobile-${i}`}
              className="absolute bg-gradient-to-b from-amber-700 to-amber-800 rounded-b-full animate-pulse"
              style={{
                left: `${15 + i * 12}%`,
                width: '3px',
                height: `${8 + Math.random() * 12}px`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${3 + Math.random()}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes drip {
          0% {
            transform: translateY(0px) scaleY(1);
            opacity: 1;
          }
          50% {
            transform: translateY(5px) scaleY(1.1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0px) scaleY(1);
            opacity: 1;
          }
        }
        
        .animate-drip {
          animation: drip 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="min-h-screen max-w-sceen relative bg-gradient-to-b from-amber-950 via-amber-900 to-amber-800 overflow-hidden">
      <ChocolateDripBar />
      
      {/* Chocolate rain effect */}
      {/* Chocolate drips */}
      <img src={choco} alt="Chocolate Drips" className="absolute top-[55vh] left-[55vw] md:left-[80vw] w-64 h-96 md:h-[60vh] md:w-[40vh] z-10 -rotate-45 object-cover hover:scale-110 hover:-rotate-[10deg] transition-all duration-500 ease-in-out" />
      <img src={img1} alt="" className={`${isOpen?'':'hidden'} z-50 absolute top-[3vh] left-[2vw]  md:top-[20vh]  h-[17vh] w-[17vh] md:h-[30vh] md:w-[30vh]  object-cover   rounded-full border-4 border-amber-600/80 transition-all duration-500 ease-in-out animate1`} />
      <img src={img2} alt="" className={`${isOpen?'':'hidden'} z-50 absolute top-[3vh] right-[2vw]  md:top-[20vh]  h-[17vh] w-[17vh] md:h-[30vh] md:w-[30vh] object-cover   rounded-full border-4 border-amber-600/80 transition-all duration-500 ease-in-out animate2 `} />
      <img src={img3} alt="" className={`${isOpen?'':'hidden'} z-50 absolute bottom-2 left-[2vw]  md:bottom-[10vh]  h-[17vh] w-[17vh] md:h-[30vh] md:w-[30vh] object-cover   rounded-full border-4 border-amber-600/80 transition-all duration-500 ease-in-out animate3 `} />
      <img src={img4} alt="" className={`${isOpen?'':'hidden'} z-50 absolute bottom-2 right-[2vw]  md:bottom-[10vh] h-[17vh] w-[17vh] md:h-[30vh] md:w-[30vh] object-cover   rounded-full border-4 border-amber-600/80 transition-all duration-500 ease-in-out animate4 `} />
      
      {/* Chocolate swirls background */}
      <div className="absolute inset-0 opacity-20 h-screen w-screen overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-amber-700"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              opacity: Math.random() * 0.3 + 0.1,
              transform: `rotate(${Math.random() * 360}deg)`,
              filter: 'blur(40px)'
            }}
          ></div>
        ))}
      </div>
      
      <main className="z-0 max-w-screen h-screen flex flex-col items-center justify-center p-4 overflow-x-hidden overflow-y-hidden">
        <h1 className="text-amber-200 text-xl md:text-4xl lg:text-5xl font-bold lg:text-center drop-shadow-lg absolute top-2 z-50 bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
          A Sweet Surprise
        </h1>
        <div onClick={() => setIsOpen(true)}>
        <ChocolateBox  />
        </div>
      </main>
    </div>
  );

}
export default App;