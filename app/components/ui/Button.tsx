import { FC } from "react";
import CenteredElement from "./CenteredElement";
import Typography from "../Typography";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  label: string;
  rounded?: boolean;
};

const Button: FC<ButtonProps> = ({ label, rounded }) => {
  return (
    <CenteredElement
      className={twMerge(
        "w-fit px-10 py-2 bg-[#3F5BD9] [box-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] hover:cursor-pointer hover:bg-[#3F5BD9]/90 transition-colors duration-300 ease-in-out",
        rounded ? "rounded-[25px]" : "rounded-[8.93617px]"
      )}
    >
      <Typography className="text-base text-white" weight="600">
        {label}
      </Typography>
    </CenteredElement>
  );
};

export default Button;
