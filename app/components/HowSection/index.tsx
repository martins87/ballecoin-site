"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import Container from "../ui/Container";
import HowToJoinCard from "./HowToJoinCard";
import Button from "../ui/Button";
import { twMerge } from "tailwind-merge";

const HowSection = () => {
  const [isSponsor, setIsSponsor] = useState(true); 

  const handleClick = () => redirect("/join");

  const handleToggle = () => setIsSponsor(!isSponsor); 

  return (
    <Container className="mt-32 mb-56">
      <div id="how-section" className="w-[90%] sm:w-[75%] mb-14 text-center">
        <Typography className="text-4xl sm:text-6xl text-black" weight="700">
          How to be part of this
          <br />
        </Typography>
        <Typography
          className="text-4xl sm:text-6xl text-[#008CFF]"
          weight="700"
        >
          &nbsp;movement
        </Typography>
        <Typography className="text-4xl sm:text-6xl text-black" weight="700">
          ?
        </Typography>
      </div>
      <CenteredElement className="w-4/5 sm:w-[65%] md:w-[50%]">
        <CenteredElement
          onClick={handleToggle}
          className={twMerge(
            "py-2 px-4 sm:px-8 tablet:px-2 [box-shadow:0px_5.10638px_12.766px_#E7E7FB] rounded-tl-[45.94px] rounded-br-none rounded-tr-none rounded-bl-[45.94px] hover:cursor-pointer",
            "bg-[linear-gradient(96.71deg,_#5656F2_0%,_#3333DC_101.64%)]"
          )}
        >
          <Typography className="text-sm sm:text-base text-white" weight="700">
            For Sponsors
          </Typography>
        </CenteredElement>
        <CenteredElement
          onClick={handleToggle}
          className={twMerge(
            "py-2 px-4 sm:px-8 tablet:px-2 [box-shadow:0px_5.10638px_12.766px_#E7E7FB] rounded-tl-[45.94px] rounded-br-none rounded-tr-none rounded-bl-[45.94px] -rotate-180 hover:cursor-pointer",
            "bg-[#3939DF]/10"
          )}
        >
          <Typography
            className="text-sm sm:text-base text-[#3F5BD9] -rotate-180"
            weight="700"
          >
            For Artists
          </Typography>
        </CenteredElement>
      </CenteredElement>
      <HowToJoinCard isSponsor={isSponsor} />
      <Button className="mt-8" label="See Details" onClick={handleClick} />
    </Container>
  );
};

export default HowSection;
