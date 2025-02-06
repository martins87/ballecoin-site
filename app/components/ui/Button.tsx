import { FC } from "react";
import CenteredElement from "./CenteredElement";
import Typography from "../Typography";

type ButtonProps = {
  label: string;
};

const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <CenteredElement className="w-fit px-10 py-2 bg-[#3F5BD9] [box-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[25px] hover:cursor-pointer hover:bg-[#3F5BD9]/90 transition-colors duration-300 ease-in-out">
      <Typography className="text-base text-white" weight="600">
        {label}
      </Typography>
    </CenteredElement>
  );
};

export default Button;
