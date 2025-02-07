import Typography from "../Typography";
import Container from "../ui/Container";
import TalentCard from "./TalentCard";
import CenteredElement from "../ui/CenteredElement";
import { dancers } from "../../constants/dancers";

const Talents = () => {
  return (
    <Container className="my-20">
      <div className="w-[90%] sm:w-[75%] mb-20 text-center">
        <Typography
          className="text-4xl sm:text-6xl text-[#008CFF]"
          weight="700"
        >
          Talentos
        </Typography>
        <Typography className="text-4xl sm:text-6xl text-black" weight="700">
          &nbsp;que precisam do
        </Typography>
        <Typography
          className="text-4xl sm:text-6xl text-[#008CFF]"
          weight="700"
        >
          &nbsp;seu apoio
        </Typography>
      </div>
      <CenteredElement className="grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 tablet:grid-cols-4 gap-2">
        {dancers.map((dancer, index) => (
          <TalentCard
            index={index}
            key={index}
            name={dancer.name}
            description={dancer.description}
            img={dancer.img}
          />
        ))}
      </CenteredElement>
    </Container>
  );
};

export default Talents;
