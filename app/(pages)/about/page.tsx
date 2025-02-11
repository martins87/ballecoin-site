import Typography from "@/app/components/Typography";
import Container from "@/app/components/ui/Container";

const AboutPage = () => {
  return (
    <Container className="my-20">
      <div className="w-[90%] sm:w-[75%] mb-20 text-center">
        <Typography className="text-4xl sm:text-6xl text-black" weight="700">
          About
        </Typography>
        <Typography
          className="text-4xl sm:text-6xl text-[#008CFF]"
          weight="700"
        >
          &nbsp;BalleCoin
        </Typography>
      </div>
    </Container>
  );
};

export default AboutPage;
