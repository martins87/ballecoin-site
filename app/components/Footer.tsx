import Link from "next/link";
import Image from "next/image";

import Container from "./ui/Container";
import Typography from "./Typography";
import Facebook from "../assets/icons/Facebook.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Instagram from "../assets/icons/Instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Typography className="text-xl" weight="600">
              BalleCoin
            </Typography>
            <Typography className="text-sm text-black/60" weight="500">
              Highlight benefits of each exercise, both physical and mental
            </Typography>
          </div>
          {/* Site */}
          <div>
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
                    Sobre Nós
                  </Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  <Typography className="text-base text-black/60" weight="500">
                    Promoções
                  </Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  <Typography className="text-base text-black/60" weight="500">
                    Novidades
                  </Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  <Typography className="text-base text-black/60" weight="500">
                    Central de Ajuda
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>
          {/* Suporte */}
          <div>
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
          </div>
          {/* Redes sociais */}
          <div>
            <Typography className="text-lg" weight="600">
              Redes Sociais
            </Typography>
            <div className="flex gap-x-4">
              <Image
                width={24}
                className="text-gray-600 hover:cursor-pointer hover:scale-125 hover:text-gray-900 transition-all duration-300 ease-in-out"
                src={Facebook}
                alt="facebook icon"
              />
              <Image
                width={24}
                className="text-gray-600 hover:cursor-pointer hover:scale-125 hover:text-gray-900 transition-all duration-300 ease-in-out"
                src={Twitter}
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
        </div>
      </Container>
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <Typography className="text-base text-black/60" weight="700">
          &copy; {new Date().getFullYear()} BalleCoin. Todos os direitos
          reservados.
        </Typography>
      </div>
    </footer>
  );
}
