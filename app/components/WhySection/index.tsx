import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import Container from "../ui/Container";
import WhyCard from "./WhyCard";

import { reasons } from "../../constants/reasons";

const WhySection = () => {
  return (
    <CenteredElement className="min-h-[90vh] mt-16 md:mt-0 mb-24">
      <Container className="flex flex-col gap-x-4">
        <div className="w-full sm:w-[80%] mb-20 text-center">
          <Typography className="text-4xl sm:text-5xl">
            <Typography weight="700">Why choose</Typography>
            <Typography className="text-[#008CFF]" weight="700">
              &nbsp;Ballecoin
              <br className="md:hidden" />
            </Typography>
            <Typography weight="700">
              &nbsp;instead of another cryptocurrency?
            </Typography>
          </Typography>
        </div>

        <CenteredElement className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reasons.map((reason, index) => (
            <WhyCard
              key={index}
              number={`0${index + 1}`}
              label={reason.label}
              description={reason.description}
            />
          ))}
        </CenteredElement>
      </Container>
    </CenteredElement>
  );
};

export default WhySection;
