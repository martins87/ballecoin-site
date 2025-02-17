import { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
// import ballerina from "../../assets/images/ballerina-0.png";
import fallback from "../../assets/images/fallback.jpg";
// import user from "../../assets/images/user.png";

type DancerCardProps = {
  index: number;
  img: string | StaticImport;
  name: string;
  description: string;
};

const DancerCard: FC<DancerCardProps> = ({ index, name, description, img }) => {
  return (
    <CenteredElement
      className={twMerge(
        "w-full h-96 p-4 bg-[#FFFFFF] border border-[rgba(217,217,217,0.4)] rounded-[10px] shadow-2xl gap-y-4 hover:cursor-pointer",
        index % 4 === 0 ? "tablet:col-span-2" : ""
      )}
      items="start"
      direction="col"
    >
      <Image
        width={56}
        height={56}
        className="flex flex-1 w-full h-[60%] rounded-xl object-cover"
        // src={img === "" ? ballerina : img}
        src={img === "" ? fallback : img}
        alt="dancer"
        priority
        // unoptimized={typeof img === "string"}
        unoptimized
      />
      <Typography className="mr-auto" weight="700">
        {name}
      </Typography>
      <Typography className="text-xs text-black/70">{description}</Typography>
    </CenteredElement>
  );
};

export default DancerCard;
