import { FC } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";

type TalentCardProps = {
  img: StaticImport;
  name: string;
  description: string;
};

const TalentCard: FC<TalentCardProps> = ({ name, description, img }) => {
  return (
    <CenteredElement
      className="w-fit p-4 bg-[#FFFFFF] border border-[rgba(217,217,217,0.4)] rounded-[10px] shadow-2xl gap-y-4"
      direction="col"
    >
      <Image src={img} alt="dancer" />
      <Typography className="mr-auto" weight="700">
        {name}
      </Typography>
      <Typography className="text-sm text-black/70">{description}</Typography>
    </CenteredElement>
  );
};

export default TalentCard;
