"use client";

import CenteredElement from "../ui/CenteredElement";
import DancerCard from "./DancerCard";
import Typography from "../Typography";
import { dancers } from "../../constants/dancers";
import { FC } from "react";
import { useMediaQuery } from "react-responsive";

type DancersProps = {
  heroSection?: boolean;
};

const Dancers: FC<DancersProps> = ({ heroSection }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const numOfItems = isMobile && !!heroSection ? 3 : dancers.length;

  return (
    <>
      <div className="w-[90%] sm:w-[75%] mb-20 text-center">
        <Typography
          className="text-4xl sm:text-6xl text-[#008CFF]"
          weight="700"
        >
          {/* Talentos */}
          Talents
        </Typography>
        <Typography className="text-4xl sm:text-6xl text-black" weight="700">
          {/* &nbsp;que precisam do */}
          &nbsp;that need
        </Typography>
        <Typography
          className="text-4xl sm:text-6xl text-[#008CFF]"
          weight="700"
        >
          {/* &nbsp;seu apoio */}
          &nbsp;your support
        </Typography>
      </div>
      <CenteredElement className="grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 tablet:grid-cols-4 gap-2 mb-10">
        {dancers.slice(0, numOfItems).map((dancer, index) => (
          <DancerCard
            index={index}
            key={index}
            name={dancer.name}
            description={dancer.description}
            img={dancer.img}
          />
        ))}
      </CenteredElement>
    </>
  );
};

export default Dancers;
