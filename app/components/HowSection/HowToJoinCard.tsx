import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import { twMerge } from "tailwind-merge";

const sponsorSteps = [
  {
    index: 1,
    label: "Create your account",
  },
  {
    index: 2,
    label: "Buy BalleCoins",
  },
  {
    index: 3,
    label: "Donate for a talent or utilize your tokens",
  },
  {
    index: 4,
    label: "Follow the career of the artist",
  },
];


const artistSteps = [
  {
    index: 1,
    label: "Create your artist profile",
  },
  {
    index: 2,
    label: "Create your solana wallet",
  },
  {
    index: 3,
    label: "Configure your profile to receive donations or tokens",
  },
  {
    index: 4,
    label: "Grow your artistic career",
  },
];

interface HowToJoinCardProps {
  isSponsor: boolean; 
}


const HowToJoinCard = ({ isSponsor }: HowToJoinCardProps) => {
  const steps = isSponsor ? sponsorSteps : artistSteps; 

  return (
    <CenteredElement
      className={twMerge(
        "w-[75%] tablet:w-3/5 sm:[box-shadow:0px_202.825px_490.554px_rgba(120,_120,_168,_0.17)] sm:border sm:shadow-lg rounded-[40px] mt-6 sm:px-8 py-10",
      )}
      direction="col"
    >
      <CenteredElement
        // className={`tablet:w-4/5`}
        direction="col"
      >
        {steps.map((step) => (
          <CenteredElement
            key={step.index}
            className="gap-x-10 sm:gap-x-4 ml-10"
            justify="start"
          >
            <CenteredElement className="w-[5vw]">
              <Typography
                className={`text-6xl text-[#3939DF]/20 text-center`}
                weight="700"
              >
                {step.index}
              </Typography>
            </CenteredElement>
            <Typography className="text-lg tablet:text-xl text-black/80" weight="500">
              {step.label}
            </Typography>
          </CenteredElement>
        ))}
      </CenteredElement>
    </CenteredElement>
  );
};

export default HowToJoinCard;