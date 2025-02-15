"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import Typography from "./Typography";
import Button from "./ui/Button";
import CenteredElement from "./ui/CenteredElement";
import Container from "./ui/Container";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => setIsLoggedIn(status === "authenticated"), [status]);

  useEffect(() => {
    if (session) {
      const image = session.user?.image;
      setProfileImage(image!);
    }
  }, [session]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <CenteredElement className="h-24">
      <Container>
        <CenteredElement justify="between" className="relative">
          <Link href="/">
            <Typography className="text-2xl" weight="800">
              BalleCoin
            </Typography>
          </Link>

          {/* Mobile Hamburger Menu */}
          <div className="tablet:hidden flex items-center">
            <button
              className="text-2xl"
              onClick={toggleMenu}
            >
              {isMenuOpen ? "X" : "☰"}
            </button>
          </div>

          {/* Desktop Menu */}
          <CenteredElement className="hidden tablet:flex w-1/2 bg-[rgba(181,_195,_255,_0.11)] [box-shadow:0px_0px_8px_rgba(127,_143,_216,_0.25)] backdrop-filter backdrop-blur-[2px] rounded-[25px] py-3">
            <CenteredElement className="flex gap-x-8">
              <Link href="/">
                <Typography className="text-base text-[#5A5A5A]" weight="500">
                  Home
                </Typography>
              </Link>
              <Link href="/about">
                <Typography className="text-base text-[#5A5A5A]" weight="500">
                  About
                </Typography>
              </Link>
              <Link href="/join">
                <Typography className="text-base text-[#5A5A5A]" weight="500">
                  How to join
                </Typography>
              </Link>
              <Link href="/dancers">
                <Typography className="text-base text-[#5A5A5A]" weight="500">
                  Dancers
                </Typography>
              </Link>
            </CenteredElement>
          </CenteredElement>

          {/* Profile or Login Button */}
          {isLoggedIn ? (
            <Link href="/profile">
              <Image
                width={52}
                height={52}
                className="rounded-full"
                src={profileImage}
                alt="Profile img"
                priority
                unoptimized={typeof profileImage === "string"}
              />
            </Link>
          ) : (
            <Link href="/login">
              <Button label="Login" rounded />
            </Link>
          )}
        </CenteredElement>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="tablet:hidden absolute top-20 left-0 w-full bg-white shadow-lg rounded-b-md z-10">
          <Link href="/">
            <Typography className="block text-center py-3 text-[#5A5A5A]" weight="500">
              Home
            </Typography>
          </Link>
          <Link href="/about">
            <Typography className="block text-center py-3 text-[#5A5A5A]" weight="500">
              About
            </Typography>
          </Link>
          <Link href="/join">
            <Typography className="block text-center py-3 text-[#5A5A5A]" weight="500">
              How to join
            </Typography>
          </Link>
          <Link href="/dancers">
            <Typography className="block text-center py-3 text-[#5A5A5A]" weight="500">
              Dancers
            </Typography>
          </Link>
        </div>
      )}
    </CenteredElement>
  );
};

export default Navbar;

