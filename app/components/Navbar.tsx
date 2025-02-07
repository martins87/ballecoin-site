import Typography from "./Typography";
import Button from "./ui/Button";
import CenteredElement from "./ui/CenteredElement";
import Container from "./ui/Container";

const Navbar = () => {
  return (
    <CenteredElement className="h-24">
      <Container>
        <CenteredElement justify="between">
          <Typography className="text-2xl" weight="800">
            BalleCoin
          </Typography>
          <CenteredElement className="hidden sm:flex w-1/2 bg-[rgba(181,_195,_255,_0.11)] [box-shadow:0px_0px_8px_rgba(127,_143,_216,_0.25)] backdrop-filter backdrop-blur-[2px] rounded-[25px] py-3">
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
          <Button label="Login" rounded />
        </CenteredElement>
      </Container>
    </CenteredElement>
  );
};

export default Navbar;
