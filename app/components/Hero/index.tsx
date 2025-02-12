"use client";

import { redirect } from "next/navigation";
import Image from "next/image";

import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Ballerina from "../../assets/images/ballerina-bg-5.png";
import CircularBackground from "./CircularBackground";

const Hero = () => {
  const handleClick = () => redirect("/join");

  return (
    <CenteredElement className="h-[90vh] -mt-6 sm:mt-0">
      <Container className="flex flex-row gap-x-4">
        <CenteredElement
          className="h-full gap-y-10"
          direction="col"
          items="start"
        >
          <Typography
            className="text-5xl sm:text-6xl text-[#008CFF]"
            weight="700"
          >
            Invest in art and sponsor dreams!
          </Typography>
          <Typography className="text-lg text-black/80">
            The first cryptocurrency for supporting and donating to young dance
            talents.
          </Typography>
          {/* <Button label="Comece Agora" /> */}
          <Button label="Start Now" onClick={handleClick} />
        </CenteredElement>
        <CenteredElement className="hidden md:flex relative w-2/3 h-full">
          <Image className="scale-90 z-20" src={Ballerina} alt="ballerina" />
          <div className="absolute top-[27%] right-[15%] w-[65%] aspect-square bg-yellow-500/10 rounded-full z-0" />
        </CenteredElement>
      </Container>
      <CircularBackground />
    </CenteredElement>
  );
};

export default Hero;
