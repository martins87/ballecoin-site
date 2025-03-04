"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import Container from "../ui/Container";
import HowToJoinCard from "./HowToJoinCard";
import Button from "../ui/Button";
import { twMerge } from "tailwind-merge";

const HowSection = () => {
  const router = useRouter();
  const [isSponsor, setIsSponsor] = useState(true);

  const handleClick = () => router.push("/join");

  const handleToggle = (sponsor: boolean) => setIsSponsor(sponsor);

  return (
    <Container className="mt-36 mb-32">
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
          onClick={() => handleToggle(true)}
          className={twMerge(
            "py-2 px-4 sm:px-8 tablet:px-2 [box-shadow:0px_5.10638px_12.766px_#E7E7FB] rounded-tl-[45.94px] rounded-br-none rounded-tr-none rounded-bl-[45.94px] hover:cursor-pointer",
            isSponsor
              ? "bg-[linear-gradient(96.71deg,_#5656F2_0%,_#3333DC_101.64%)]"
              : "bg-[#3939DF]/10"
          )}
        >
          <Typography
            className={twMerge(
              isSponsor
                ? "text-sm sm:text-base text-white"
                : "text-sm sm:text-base text-[#3F5BD9]"
            )}
            weight="700"
          >
            For Sponsors
          </Typography>
        </CenteredElement>
        <CenteredElement
          onClick={() => handleToggle(false)}
          className={twMerge(
            "py-2 px-4 sm:px-8 tablet:px-2 [box-shadow:0px_5.10638px_12.766px_#E7E7FB] rounded-tl-[45.94px] rounded-br-none rounded-tr-none rounded-bl-[45.94px] hover:cursor-pointer -rotate-180",
            isSponsor
              ? "bg-[#3939DF]/10"
              : "bg-[linear-gradient(96.71deg,_#5656F2_0%,_#3333DC_101.64%)]"
          )}
        >
          <Typography
            className={twMerge(
              "-rotate-180",
              !isSponsor
                ? "text-sm sm:text-base text-white"
                : "text-sm sm:text-base text-[#3F5BD9]"
            )}
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
