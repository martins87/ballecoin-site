import Link from "next/link";
import Image from "next/image";

import Container from "./ui/Container";
import Typography from "./Typography";
import Telegram from "../assets/icons/telegram.svg";
import X from "../assets/icons/x-icon.png";
import Instagram from "../assets/icons/Instagram.svg";
import CenteredElement from "./ui/CenteredElement";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <Container>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
        <CenteredElement
          className="flex-col md:flex-row gap-x-4 gap-y-10"
          items="start"
          justify="between"
        >
          <div className="flex flex-col gap-y-3">
            <Link className="w-fit" href="/">
              <Typography className="text-xl" weight="600">
                BalleCoin
              </Typography>
            </Link>
            <Typography
              className="w-full md:w-1/2 text-sm text-black/60"
              weight="500"
            >
              A primeira criptomoeda de apoio e doações para jovens talentos da
              dança.
            </Typography>
          </div>

          {/* Site */}
          <div className="flex flex-col gap-y-3">
            <Typography className="text-lg" weight="600">
              Site
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  <Typography className="text-base text-black/60" weight="500">
                    About BalleCoin
                  </Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  <Typography className="text-base text-black/60" weight="500">
                    How to join
                  </Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="/dancers"
                  className="hover:text-gray-900 transition-colors"
                >
                  <Typography className="text-base text-black/60" weight="500">
                    Dancers
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          {/* <div className="flex flex-col gap-y-4">
            <Typography className="text-lg" weight="600">
              Suporte
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  <Typography className="text-base text-black/60" weight="500">
                    FAQ
                  </Typography>
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Redes sociais */}
          <div className="flex flex-col gap-y-3">
            <Typography className="text-lg" weight="600">
              Redes Sociais
            </Typography>
            <div className="flex gap-x-4">
              <Image
                width={24}
                className="text-gray-600 hover:cursor-pointer hover:scale-125 hover:text-gray-900 transition-all duration-300 ease-in-out"
                src={Telegram}
                alt="facebook icon"
              />
              <Image
                width={24}
                className="text-gray-600 hover:cursor-pointer hover:scale-125 hover:text-gray-900 transition-all duration-300 ease-in-out"
                src={X}
                alt="twitter icon"
              />
              <Image
                width={24}
                className="text-gray-600 hover:cursor-pointer hover:scale-125 hover:text-gray-900 transition-all duration-300 ease-in-out"
                src={Instagram}
                alt="instagram icon"
              />
            </div>
          </div>
        </CenteredElement>
      </Container>
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <Typography className="text-base text-black/60" weight="700">
          &copy; {new Date().getFullYear()} BalleCoin
        </Typography>
      </div>
    </footer>
  );
}
