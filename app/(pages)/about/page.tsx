"use client";

import { motion } from "framer-motion";

import Typography from "@/app/components/Typography";
import Container from "@/app/components/ui/Container";
import AboutToken from "../../components/About";

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
      <AboutToken />
    </Container>
  );
};

export default AboutPage;
