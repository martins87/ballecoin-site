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
import CenteredElement from "./ui/CenteredElement";
import LoadingModal from "./LoadingModal";
import fallback from "../assets/images/fallback.jpg";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [profileImage, setProfileImage] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [residenceCountry, setResidenceCountry] = useState<string>("");
  const [solanaAddress, setSolanaAddress] = useState<string>("");
  const [birthCountry, setBirthCountry] = useState<string>("");
  const [balletSchool, setBalletSchool] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [tiktok, setTiktok] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getDancer = async () => {
      if (session) {
        console.log("LoggedIn:", session);
        const sessionImage = session.user?.image;
        const sessionEmail = session.user?.email;

        setLoading(true);
        const dancer = await getDancerByEmail(sessionEmail!);
        setLoading(false);

        console.log("dancer gotten from database", dancer);
        setProfileImage(sessionImage!);
        setId(dancer._id);
        setName(dancer.name);
        setEmail(dancer.email);
        setResidenceCountry(dancer.residenceCountry);
        setSolanaAddress(dancer.solanaAddress);
        setBirthCountry(dancer.birthCountry);
        setBalletSchool(dancer.balletSchool);
        setDescription(dancer.description);
        setInstagram(dancer.instagram);
        setTiktok(dancer.tiktok);
        setPicture(dancer.picture);

        if (dancer.picture === "") {
          console.log("No image uploaded");
        }
      }
    };

    getDancer();
  }, [session]);

  const handleSave = async () => {
    try {

      setLoading(true);
      const updatedDancer = await updateDancer(
        id,
        name,
        email,
        residenceCountry,
        solanaAddress,
        birthCountry,
        balletSchool,
        description,
        instagram,
        tiktok,
        picture
      );
      setLoading(false);

      console.log("Dancer updated successfully:", updatedDancer);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const reader = new FileReader();

    reader.onloadend = () => {
      console.log("reader.result", reader.result);
      setPicture(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-14">
        <Container className="bg-white rounded-xl shadow-sm p-8">
          <CenteredElement className="w-full tablet:w-3/5 gap-0 mb-8" justify="around">
            <Image
              width={52}
              height={52}
              className="w-1/2 rounded-lg overflow-hidden hover:cursor-pointer"
              // src={picture || Ballerina}
              src={picture || fallback}
              alt="Profile img"
              priority
              unoptimized={typeof profileImage === "string"}
              />
            <CenteredElement className="w-1/2">
              <Typography className="text-3xl" weight="700">
                Profile
              </Typography>
            </CenteredElement>
          </CenteredElement>
          <input
            className="w-full tablet:w-3/5 mb-6"
            type="file"
            onChange={handleFileChange}
            // disabled={!isEditing}
          />

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
                  // disabled={!isEditing}
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
                  // disabled={!isEditing}
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
                  // disabled={!isEditing}
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
                  // disabled={!isEditing}
                />
              </div>
              {/* <div className="space-y-2">
                <Typography className="text-base" weight="500" font="inter">
                  Date of Birth
                </Typography>
                <Input className="rounded-[9px]" type="date" />
              </div> */}
              <div className="space-y-2">
                <Typography className="text-base" weight="500" font="inter">
                  Ballet School
                </Typography>
                <Input
                  className="rounded-[9px]"
                  placeholder="Enter your ballet school"
                  value={balletSchool}
                  onChange={(e) => setBalletSchool(e.target.value)}
                  // disabled={!isEditing}
                />
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
                  // disabled={!isEditing}
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
                  // disabled={!isEditing}
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
                // disabled={!isEditing}
              />
            </div>

            <div className="flex gap-4 pt-4">
              {/* <Button
                className="px-8 py-2 bg-gradient-to-r from-[#F2D356] to-[#DC6033] hover:opacity-90 transition-opacity"
                label="Edit"
                onClick={handleEdit}
                /> */}
              <Button
                className="px-8 py-2 bg-gradient-to-r from-[#5656F2] to-[#3333DC] hover:opacity-90 transition-opacity"
                label="Save"
                onClick={handleSave}
                // disabled={!isEditing}
              />
            </div>
          </form>
        </Container>
      </div>
      {loading && <LoadingModal text="Loading..." />}
    </>
  );
}
