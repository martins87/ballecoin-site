import Typography from "./Typography";
import CenteredElement from "./ui/CenteredElement";
import Container from "./ui/Container";

const Navbar = () => {
  return (
    <CenteredElement className="h-20">
      <Container>
        <CenteredElement className="" justify="between">
          <Typography className="text-2xl" weight="800">
            BalleCoin
          </Typography>
          <CenteredElement className="w-1/2 bg-[rgba(181,_195,_255,_0.11)] [box-shadow:0px_0px_8px_rgba(127,_143,_216,_0.25)] backdrop-filter backdrop-blur-[2px] rounded-[25px] py-3">
            <CenteredElement className="flex gap-x-8">
              <Typography className="text-base text-[#5A5A5A]" weight="500">
                Home
              </Typography>
              <Typography className="text-base text-[#5A5A5A]" weight="500">
                Solution
              </Typography>
              <Typography className="text-base text-[#5A5A5A]" weight="500">
                Service
              </Typography>
              <Typography className="text-base text-[#5A5A5A]" weight="500">
                Artists
              </Typography>
            </CenteredElement>
          </CenteredElement>
          <Typography>Navbar</Typography>
        </CenteredElement>
      </Container>
    </CenteredElement>
  );
};

export default Navbar;
