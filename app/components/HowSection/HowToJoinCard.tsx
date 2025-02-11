import Typography from "../Typography";
import Button from "../ui/Button";
import CenteredElement from "../ui/CenteredElement";

const steps = [
  {
    index: 1,
    label: "Crie sua conta",
  },
  {
    index: 2,
    label: "Compre Ballecoins",
  },
  {
    index: 3,
    label: "Doe para um talento ou utilize seus tokens",
  },
  {
    index: 4,
    label: "Lorem",
  },
];

const HowToJoinCard = () => {
  return (
    <CenteredElement
      className="w-[90%] sm:w-3/5 sm:[box-shadow:0px_202.825px_490.554px_rgba(120,_120,_168,_0.17)] sm:border sm:shadow-lg rounded-[40px] mt-6 sm:px-8 py-10"
      direction="col"
    >
      <CenteredElement
        className="border-b border-[#3939DF]/10 pb-8"
        direction="col"
      >
        {steps.map((step) => (
          <CenteredElement
            key={step.index}
            className="gap-x-10 sm:gap-x-6"
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
            <Typography className="text-xl sm:text-2xl" weight="700">
              {step.label}
            </Typography>
          </CenteredElement>
        ))}
      </CenteredElement>
      {/* <div className="absolute w-full h-[1px] bg-[#3939DF]/10" /> */}
      <Button className="mt-8" label="Ver detalhadamente" />
    </CenteredElement>
  );
};

export default HowToJoinCard;
