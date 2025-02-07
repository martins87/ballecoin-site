"use client";

import { redirect } from "next/navigation";

import Container from "../ui/Container";

import Button from "../ui/Button";
import Talents from "./Talents";

const talents = () => {
  const handleSeeMore = () => redirect("/talents");

  return (
    <Container className="my-20">
      <Talents heroSection />
      <Button label="Ver mais" onClick={handleSeeMore} />
    </Container>
  );
};

export default talents;
