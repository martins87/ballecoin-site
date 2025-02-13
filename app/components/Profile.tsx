"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

import { Input } from "./Input";
import { Textarea } from "./Textarea";
import Typography from "./Typography";
import Button from "./ui/Button";
import Container from "./ui/Container";
import { getDancerByEmail, updateDancer } from "../lib/db";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [profileImage, setProfileImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [residenceCountry, setResidenceCountry] = useState<string>("");
  const [solanaAddress, setSolanaAddress] = useState<string>("");
  const [birthCountry, setBirthCountry] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [tiktok, setTiktok] = useState<string>("");

  useEffect(() => {
    const getDancer = async () => {
      if (session) {
        console.log("LoggedIn:", session);
        const sessionImage = session.user?.image;
        const sessionEmail = session.user?.email;

        const dancer = await getDancerByEmail(sessionEmail!);

        console.log("dancer gotten from database", dancer);
        setProfileImage(sessionImage!);
        setName(dancer.name);
        setEmail(dancer.email);
        setResidenceCountry(dancer.residenceCountry);
        setSolanaAddress(dancer.solanaAddress);
        setBirthCountry(dancer.birthCountry);
        setDescription(dancer.description);
        setInstagram(dancer.instagram);
        setTiktok(dancer.tiktok);
      }
    };

    getDancer();
  }, [session]);

  const handleSave = async () => {
    try {
      const updatedDancer = await updateDancer(
        name,
        email,
        residenceCountry,
        solanaAddress,
        birthCountry,
        description,
        instagram,
        tiktok
      );
      console.log("Dancer updated successfully:", updatedDancer);
      alert("Dancer updated successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-14">
      <Container className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center gap-6 mb-8">
          <Image
            width={128}
            height={128}
            className="rounded-full"
            src={profileImage}
            alt="Profile img"
            priority
            unoptimized={typeof profileImage === "string"}
          />
          <Typography className="text-3xl" weight="700">
            Profile
          </Typography>
        </div>

        <form className="w-full tablet:w-3/5 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Typography className="text-base" weight="500" font="inter">
                Name
              </Typography>
              <Input
                className="rounded-[9px]"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Typography className="text-base" weight="500" font="inter">
                Email
              </Typography>
              <Input
                className="rounded-[9px]"
                type="email"
                placeholder="Enter your email"
                value={email}
                disabled
              />
            </div>
            <div className="space-y-2">
              <Typography className="text-base" weight="500" font="inter">
                Current Country of Residence
              </Typography>
              <Input
                className="rounded-[9px]"
                placeholder="Enter your current country"
                value={residenceCountry}
                onChange={(e) => setResidenceCountry(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Typography className="text-base" weight="500" font="inter">
                Solana Address
              </Typography>
              <Input
                className="rounded-[9px]"
                placeholder="Enter your Solana address"
                value={solanaAddress}
                onChange={(e) => setSolanaAddress(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Typography className="text-base" weight="500" font="inter">
                Country of Birth
              </Typography>
              <Input
                className="rounded-[9px]"
                placeholder="Enter your birth country"
                value={birthCountry}
                onChange={(e) => setBirthCountry(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Typography className="text-base" weight="500" font="inter">
                Date of Birth
              </Typography>
              <Input className="rounded-[9px]" type="date" />
            </div>
            <div className="space-y-2">
              <Typography className="text-base" weight="500" font="inter">
                Instagram
              </Typography>
              <Input
                className="rounded-[9px]"
                placeholder="Enter your Instagram username"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Typography className="text-base" weight="500" font="inter">
                Tiktok
              </Typography>
              <Input
                className="rounded-[9px]"
                placeholder="Enter your Tiktok username"
                value={tiktok}
                onChange={(e) => setTiktok(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Typography className="text-base" weight="500" font="inter">
              Description
            </Typography>
            <Textarea
              className="rounded-[9px] min-h-[120px]"
              placeholder="Write your bio here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              className="px-8 py-2 bg-gradient-to-r from-[#F2D356] to-[#DC6033] hover:opacity-90 transition-opacity"
              label="Edit"
              // onClick={}
            />
            <Button
              className="px-8 py-2 bg-gradient-to-r from-[#5656F2] to-[#3333DC] hover:opacity-90 transition-opacity"
              label="Save"
              onClick={handleSave}
            />
          </div>
        </form>
      </Container>
    </div>
  );
}
