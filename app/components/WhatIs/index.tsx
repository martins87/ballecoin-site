import Image from "next/image";

import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import Container from "../ui/Container";
import Check from "../../assets/icons/check.svg";
import Ballerina from "../../assets/images/ballerina.png";

const features: string[] = [
  "Baixo custo de transação",
  "Segurança e transparência via blockchain",
  "Comunidade global unida pela dança",
];

const WhatIs = () => {
  return (
    <CenteredElement className="h-[90vh] mt-10">
      <Container className="flex flex-row gap-x-4">
        <CenteredElement
          className="h-full gap-y-10"
          direction="col"
          items="start"
        >
          <Typography
            className="w-full text-center sm:text-left text-4xl sm:text-5xl xl:text-6xl text-[#008CFF]"
            weight="700"
          >
            What is BalleCoin?
          </Typography>
          <Typography className="text-base sm:text-lg text-black/80">
            Ballecoin é uma criptomoeda projetada para conectar jovens talentos
            da dança com filantropos em uma rede global de apoio. Utilizando
            tecnologia blockchain, garante transparência, segurança e transações
            sem custo, permitindo que a arte alcance novos patamares.
          </Typography>
          <CenteredElement className="gap-y-4" direction="col">
            {features.map((feature) => (
              <CenteredElement
                key={feature}
                className="gap-x-4"
                justify="start"
              >
                <CenteredElement className="w-8 aspect-square rounded-full bg-[#20B486]">
                  <Image src={Check} alt="check" />
                </CenteredElement>
                <Typography weight="600">{feature}</Typography>
              </CenteredElement>
            ))}
          </CenteredElement>
        </CenteredElement>
        <CenteredElement className="hidden md:flex relative w-2/3 h-full">
          <Image className="scale-90 z-20" src={Ballerina} alt="ballerina" />
          <div className="absolute top-[27%] right-[15%] w-[65%] aspect-square bg-yellow-500/10 rounded-full z-0" />
        </CenteredElement>
      </Container>
    </CenteredElement>
  );
};

export default WhatIs;
