import Image from "next/image";
import Typography from "../Typography";
import CenteredElement from "../ui/CenteredElement";
import BluBg from "../../assets/images/blue-bg.png";
import WorldBg from "../../assets/images/world.png";
import Container from "../ui/Container";

const World = () => {
  return (
    <CenteredElement className="relative h-[75vh] sm:h-[90vh] bg-blue-200">
      <Image className="absolute w-full h-full" src={BluBg} alt="blue bg" />
      <Image
        className="absolute bottom-0 h-1/2 z-20 object-cover"
        src={WorldBg}
        alt="blue bg"
      />
      <Container className="justify-start gap-y-10 z-50">
        <Typography
          className="w-full text-4xl sm:text-6xl text-white text-center z-30 mt-[20%] sm:mt-[10%]"
          weight="700"
        >
          {/* O mundo da arte em um só lugar */}
          The world of art in one place.
        </Typography>
        <Typography className="w-[90%] sm:w-[65%] z-30 text-center text-white">
          {/* Ao comprar Ballecoin, você apoia jovens talentos da dança em todo o
          mundo, conectando-os a oportunidades sem intermediários. Seu
          investimento impulsiona artistas, financia competições e fortalece a
          arte com transparência e impacto real. */}
          By purchasing Ballecoin, you support young dance talents worldwide,
          connecting them to opportunities without intermediaries. Your
          investment empowers artists, funds competitions, and strengthens the
          arts with transparency and real impact.
        </Typography>
      </Container>
    </CenteredElement>
  );
};

export default World;
