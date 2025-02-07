import { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import { twMerge } from "tailwind-merge";

type TalentCardProps = {
  index: number;
  img: StaticImport;
  name: string;
  description: string;
};

const TalentCard: FC<TalentCardProps> = ({ index, name, description, img }) => {
  return (
    <CenteredElement
      className={twMerge(
        "w-full h-96 p-4 bg-[#FFFFFF] border border-[rgba(217,217,217,0.4)] rounded-[10px] shadow-2xl gap-y-4 hover:cursor-pointer",
        index % 4 === 0 ? "tablet:col-span-2" : ""
      )}
      direction="col"
    >
      <Image
        className="flex flex-1 w-full h-[60%] rounded-xl object-cover"
        src={img}
        alt="dancer"
      />
      <Typography className="mr-auto" weight="700">
        {name}
      </Typography>
      <Typography className="text-xs text-black/70">{description}</Typography>
    </CenteredElement>
  );
};

export default TalentCard;
