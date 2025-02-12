"use client";

import { redirect } from "next/navigation";

import Container from "../ui/Container";

import Button from "../ui/Button";
import Dancers from "./Dancers";

const DancersSection = () => {
  const handleSeeMore = () => redirect("/dancers");

  return (
    <Container className="my-20">
      <Dancers heroSection />
      {/* <Button label="Ver mais" onClick={handleSeeMore} /> */}
      <Button label="See More" onClick={handleSeeMore} />
    </Container>
  );
};

export default DancersSection;
