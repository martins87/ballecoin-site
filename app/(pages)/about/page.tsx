"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import Typography from "@/app/components/Typography";
import Container from "@/app/components/ui/Container";
import AboutToken from "../../components/About";
import CenteredElement from "@/app/components/ui/CenteredElement";
import ExternalLink from "../../assets/icons/external-link.svg";
import Raydium from "../../assets/icons/raydium.png";
import Jupiter from "../../assets/icons/jupiter.png";

const AboutPage = () => {
  return (
    <Container className="my-20">
      <motion.div
        className="w-[90%] sm:w-[75%] mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography className="text-4xl sm:text-6xl text-black" weight="700">
          About
        </Typography>
        <Typography
          className="text-4xl sm:text-6xl text-[#008CFF]"
          weight="700"
        >
          &nbsp;BalleCoin
        </Typography>
      </motion.div>
      <CenteredElement className="gap-y-2 md:gap-y-3" direction="col">
        <Typography className="text-xl" weight="600">
          Token address:
        </Typography>
        <Link
          className="flex items-center justify-between gap-x-3"
          href="https://solscan.io/token/7fpj12mqovZuDPGB3VQ1nCYkG5HVdLN6g9ZjCUwCGxu9"
          target="_blank"
          rel="noopener"
        >
          <Typography className="text-xs md:text-xl">
            7fpj12mqovZuDPGB3VQ1nCYkG5HVdLN6g9ZjCUwCGxu9
          </Typography>
          <Image
            className="w-3 md:w-5"
            src={ExternalLink}
            alt="external link"
          />
        </Link>
      </CenteredElement>
      <CenteredElement className="gap-y-2 md:gap-y-3 mt-10" direction="col">
        <Typography className="text-xl" weight="600">
          Buy on:
        </Typography>
        <CenteredElement className="gap-x-10">
          <Link
            className="flex items-center justify-between gap-x-2"
            href="https://raydium.io/swap/?inputMint=sol&outputMint=7fpj12mqovZuDPGB3VQ1nCYkG5HVdLN6g9ZjCUwCGxu9"
            target="_blank"
            rel="noopener"
          >
            <Image className="w-6" src={Raydium} alt="external link" />
            <Typography className="text-lg md:text-xl" font="inter">
              Raydium
            </Typography>
          </Link>
          <Link
            className="flex items-center justify-between gap-x-2"
            href="https://jup.ag/swap/SOL-7fpj12mqovZuDPGB3VQ1nCYkG5HVdLN6g9ZjCUwCGxu9"
            target="_blank"
            rel="noopener"
          >
            <Image className="w-6" src={Jupiter} alt="external link" />
            <Typography className="text-lg md:text-xl" font="inter">
              Jupiter
            </Typography>
          </Link>
        </CenteredElement>
      </CenteredElement>
      <AboutToken />
    </Container>
  );
};

export default AboutPage;
