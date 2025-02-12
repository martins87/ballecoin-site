import { FC } from "react";
import CenteredElement from "../ui/CenteredElement";
import Typography from "../Typography";
import Number from "./Number";

type WhyCardProps = {
  number: string;
  label: string;
  description: string;
};

const WhyCard: FC<WhyCardProps> = ({ number, label, description }) => {
  return (
    <CenteredElement
      className="gap-2 min-h-60 px-4 pt-4 pb-2 bg-[#FFFFFF] border-[1px] border-[rgba(216,216,216,0.4)] [box-shadow:0px_4px_31px_rgba(0,_0,_0,_0.25)] rounded-[10px]"
      items="start"
      justify="start"
      direction="col"
    >
      <Number index={number} />
      <Typography className="text-xl text-[#141414]" weight="500">
        {label}
      </Typography>
      <Typography className="text-base text-[#1E1E1E]/80" weight="400">
        {description}
      </Typography>
    </CenteredElement>
  );
};

export default WhyCard;
