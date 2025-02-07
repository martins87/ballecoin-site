import Typography from "../Typography";
import Container from "../ui/Container";
import TalentCard from "./TalentCard";
import Dancer0 from "../../assets/images/dancers/dancer-0.png";
import CenteredElement from "../ui/CenteredElement";

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
        <TalentCard
          name="Maria Clara"
          description="Hana combina delicadeza e força em suas performances. Seu objetivo é ingressar em uma academia de balé de alto nível no exterior, mas os custos de viagem e hospedagem são um grande desafio."
          img={Dancer0}
        />
        <TalentCard
          name="Maria Clara"
          description="Hana combina delicadeza e força em suas performances. Seu objetivo é ingressar em uma academia de balé de alto nível no exterior, mas os custos de viagem e hospedagem são um grande desafio."
          img={Dancer0}
        />
        <TalentCard
          name="Maria Clara"
          description="Hana combina delicadeza e força em suas performances. Seu objetivo é ingressar em uma academia de balé de alto nível no exterior, mas os custos de viagem e hospedagem são um grande desafio."
          img={Dancer0}
        />
        <TalentCard
          name="Maria Clara"
          description="Hana combina delicadeza e força em suas performances. Seu objetivo é ingressar em uma academia de balé de alto nível no exterior, mas os custos de viagem e hospedagem são um grande desafio."
          img={Dancer0}
        />
      </CenteredElement>
    </Container>
  );
};

export default Talents;
