import { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import ballerina from "../../assets/images/ballerina-0.png";

type DancerCardProps = {
  index: number;
  img: string | StaticImport;
  name: string;
  description: string;
};

const DancerCard: FC<DancerCardProps> = ({ index, name, description, img }) => {
  console.log("dancer", {name, img});
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
        // src={img}
        src={img === "" ? ballerina : img}
        // src={img === "" ? "https://images.unsplash.com/photo-1568481996616-dc7f8ff0bab9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : img}
        alt="dancer"
      />
      <Typography className="mr-auto" weight="700">
        {name}
      </Typography>
      <Typography className="text-xs text-black/70">{description}</Typography>
    </CenteredElement>
  );
};

export default DancerCard;
