import { redirect } from "next/navigation";

import Typography from "../Typography";
import Button from "../ui/Button";
import CenteredElement from "../ui/CenteredElement";

const steps = [
  {
    index: 1,
    // label: "Crie sua conta",
    label: "Create you account",
  },
  {
    index: 2,
    // label: "Compre Ballecoins",
    label: "Buy BalleCoins",
  },
  {
    index: 3,
    // label: "Doe para um talento ou utilize seus tokens",
    label: "Donate for a talent or utilize your tokens",
  },
  {
    index: 4,
    label: "Follow the career of the artist",
  },
];

const HowToJoinCard = () => {
  const handleClick = () => redirect("/join");

  return (
    <CenteredElement
      className="w-[90%] sm:w-3/5 sm:[box-shadow:0px_202.825px_490.554px_rgba(120,_120,_168,_0.17)] sm:border sm:shadow-lg rounded-[40px] mt-6 sm:px-8 py-10"
      direction="col"
    >
      <CenteredElement
        className="tablet:w-4/5 border-b border-[#3939DF]/10 pb-8"
        direction="col"
      >
        {steps.map((step) => (
          <CenteredElement
            key={step.index}
            className="gap-x-10 sm:gap-x-4"
            justify="start"
          >
            <CenteredElement className="w-[5vw]">
              <Typography
                className="text-6xl text-[#3939DF]/10 text-center"
                weight="700"
              >
                {step.index}
              </Typography>
            </CenteredElement>
            <Typography className="text-lg tablet:text-xl" weight="500">
              {step.label}
            </Typography>
          </CenteredElement>
        ))}
      </CenteredElement>
      {/* <Button className="mt-8" label="Ver detalhadamente" /> */}
      <Button className="mt-8" label="See Details" onClick={handleClick} />
    </CenteredElement>
  );
};

export default HowToJoinCard;
