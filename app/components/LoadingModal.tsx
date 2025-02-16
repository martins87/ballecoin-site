import { FC } from "react";
import Typography from "./Typography";
import CenteredElement from "./ui/CenteredElement";

type LoadingModalProps = {
  text: string;
};

const LoadingModal: FC<LoadingModalProps> = ({text}) => {
  return (
    <CenteredElement className="fixed top-0 left-0 w-screen h-screen bg-white/[95%] z-20">
      <Typography className="text-xl">{text}</Typography>
    </CenteredElement>
  );
};

export default LoadingModal;
