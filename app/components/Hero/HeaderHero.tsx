'use client'; 

import Typography from "../Typography";
import Button from "../ui/Button";
import CenteredElement from "../ui/CenteredElement";

const HeaderHero = () => {
    const handleClick = () => {
      const section = document.getElementById("how-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <CenteredElement
        className="mt-10 px-5 h-full flex flex-col items-center justify-center gap-y-10"
      >
        <Typography className="text-4xl sm:text-5xl text-[#008CFF]" weight="700">
          Invest in art and sponsor dreams!
        </Typography>
        <Typography className="text-lg text-black/80 font-bold">
          The first cryptocurrency for supporting and donating to young dance talents.
        </Typography>
        <Button 
          label="Join Us" 
          onClick={handleClick} 
          className="rounded-[50px]" // bordas bem arredondadas
        />
      </CenteredElement>
    );
  };

export default HeaderHero;
