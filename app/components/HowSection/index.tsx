"use client";

import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import Container from "../ui/Container";
import HowToJoinCard from "./HowToJoinCard";

const HowSection = () => {
  return (
    <Container className="mt-32 mb-56">
      <div className="w-[90%] sm:w-[75%] mb-14 text-center">
        <Typography className="text-4xl sm:text-6xl text-black" weight="700">
          {/* Como fazer parte desse */}
          How to be part of this
          <br />
        </Typography>
        <Typography
          className="text-4xl sm:text-6xl text-[#008CFF]"
          weight="700"
        >
          &nbsp;moviment
        </Typography>
        <Typography className="text-4xl sm:text-6xl text-black" weight="700">
          ?
        </Typography>
      </div>
      <CenteredElement className="w-4/5 sm:w-[65%] md:w-[50%]">
        <CenteredElement className="py-2 px-4 sm:px-8 tablet:px-2 bg-[linear-gradient(96.71deg,_#5656F2_0%,_#3333DC_101.64%)] [box-shadow:0px_5.10638px_12.766px_#E7E7FB] rounded-tl-[45.94px] rounded-br-none rounded-tr-none rounded-bl-[45.94px] hover:cursor-pointer">
          <Typography className="text-sm sm:text-base text-white" weight="700">
            {/* Para Doadores */}
            For Sponsors
          </Typography>
        </CenteredElement>
        <CenteredElement className="py-2 px-4 sm:px-8 tablet:px-2 bg-[linear-gradient(96.71deg,_rgba(86,_86,_242,_0.4)_0%,_rgba(51,_51,_220,_0.4)_101.64%)] [box-shadow:0px_5.10638px_12.766px_#E7E7FB] rounded-tl-[45.94px] rounded-br-none rounded-tr-none rounded-bl-[45.94px] -rotate-180 hover:cursor-pointer">
          <Typography
            className="text-sm sm:text-base text-white -rotate-180"
            weight="700"
          >
            {/* Para Artistas */}
            For Artists
          </Typography>
        </CenteredElement>
      </CenteredElement>
      <HowToJoinCard />
    </Container>
  );
};

export default HowSection;
