"use client"
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import BalleCoin from "../../assets/icons/ballecoin-logo.png";
import Image from 'next/image'

interface HeroOrbitalNetwork {
  avatars: string[];
}

export default function HeroOrbitalNetwork({ avatars }: HeroOrbitalNetwork) {
  const orbitSizes = [200, 300, 400, 500, 600, 700, 800]; 
  const [avatarsPerOrbit, setAvatarsPerOrbit] = useState<string[][]>([]);

  useEffect(() => {
    const distributeAvatars = () => {
      const shuffledAvatars = [...avatars].sort(() => Math.random() - 0.5);
      const distributed: string[][] = orbitSizes.map(() => []); 

      shuffledAvatars.forEach((avatar, index) => {
        const orbitIndex = index % orbitSizes.length;
        distributed[orbitIndex].push(avatar);
      });

      setAvatarsPerOrbit(distributed);
    };

    distributeAvatars();
  }, [avatars]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative flex items-center justify-center">
        {/* Elemento central */}
        <div className="absolute z-[-1] w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50 animate-pulse">
          {/* <Image src="/assets/icons/ballecoin-logo.png" alt="Ballecoin Logo" width={100} height={100} /> */}
          <Image src={BalleCoin} alt="Ballecoin Logo" width={100} height={100} />
        </div>

        {/* Anéis orbitais */}
        {orbitSizes.map((size, orbitIndex) => (
          <div
            key={orbitIndex}
            className="absolute border border-gray-700/50 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              animation: `spin ${(orbitIndex + 1) * 20}s linear infinite`,
            }}
          >
            {avatarsPerOrbit[orbitIndex]?.map((avatar, index) => {
              const angle = (Math.random() * 2 * Math.PI); 
              const sizes = [20, 30, 40]; 
              const randomSize = sizes[Math.floor(Math.random() * sizes.length)]; 

              return (
                <Avatar
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 hover:border-yellow-500 rounded-full overflow-hidden"
                  style={{
                    width: `${randomSize}px`,
                    height: `${randomSize}px`,
                    left: `${50 + 45 * Math.cos(angle)}%`,
                    top: `${50 + 45 * Math.sin(angle)}%`,
                    transform: 'rotate(0deg)' 
                  }}
                >
                  <AvatarImage src={avatar} className="w-full h-full object-cover" />
                  <AvatarFallback>U{index + 1}</AvatarFallback>
                </Avatar>
              );
            })}

          </div>
        ))}

        {/* Elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 pointer-events-none" />
      </div>
    </div>
  );
}

const styles = `
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}



