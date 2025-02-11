import { FC } from "react";
import Image from "next/image";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import Ellipsis from "../../assets/images/ellipse.png";
import { twMerge } from "tailwind-merge";

type NumberProps = {
  index: string;
};

const Number: FC<NumberProps> = ({ index }) => {
  return (
    <CenteredElement className="relative mb-12">
      <Image
        className={twMerge(
          "absolute top-0 left-0",
          +index % 2 === 0 ? "rotate-90" : ""
        )}
        src={Ellipsis}
        alt="ellipsis"
      />
      <Typography
        className="absolute top-0 left-0 text-3xl text-[#008CFF] z-10"
        weight="500"
      >
        {index}
      </Typography>
    </CenteredElement>
  );
};

export default Number;
