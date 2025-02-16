import Image from "next/image";

import CenteredElement from "../ui/CenteredElement";
import Container from "../ui/Container";
import Typography from "../Typography";
import GoogleLoginButton from "./GoogleLoginButton";
import Logo from "../../assets/icons/ballecoin-logo.png";

export default function LoginPage() {
  return (
    <Container className="min-h-[50vh] flex flex-col items-center justify-center p-4 my-10">
      <CenteredElement className="max-w-md gap-y-10" direction="col">
        <CenteredElement className="gap-y-6 -mb-2" direction="col">
          <Image
            className="w-32 aspect-square"
            src={Logo}
            alt="ballecoin logo"
          />
          <Typography
            className="text-3xl tracking-normal text-gray-900 order-first"
            weight="700"
            font="inter"
          >
            For dancers only
          </Typography>
        </CenteredElement>
        <GoogleLoginButton />
        <CenteredElement className="gap-x-4">
          <Typography className="text-sm text-black/50" font="inter">
            Termos de Uso
          </Typography>
          <Typography className="text-sm text-black/50">•</Typography>
          <Typography className="text-sm text-black/50" font="inter">
            Política de Privacidade
          </Typography>
        </CenteredElement>
      </CenteredElement>
    </Container>
  );
}
