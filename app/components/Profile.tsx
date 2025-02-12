"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

import { Input } from "./Input";
import { Textarea } from "./Textarea";
import Typography from "./Typography";
import Button from "./ui/Button";
import Container from "./ui/Container";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [profileImage, setProfileImage] = useState<string>("");

  useEffect(() => {
    if (session) {
      const image = session.user?.image;
      setProfileImage(image!);
    }
  }, [session]);

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
              <Typography className="text-sm" weight="500">
                Name
              </Typography>
              <Input className="rounded-[9px]" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Typography className="text-sm" weight="500">
                Email
              </Typography>
              <Input
                className="rounded-[9px]"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Typography className="text-sm" weight="500">
                Current Country of Residence
              </Typography>
              <Input
                className="rounded-[9px]"
                placeholder="Enter your current country"
              />
            </div>
            <div className="space-y-2">
              <Typography className="text-sm" weight="500">
                Solana Address
              </Typography>
              <Input
                className="rounded-[9px]"
                placeholder="Enter your Solana address"
              />
            </div>
            <div className="space-y-2">
              <Typography className="text-sm" weight="500">
                Country of Birth
              </Typography>
              <Input
                className="rounded-[9px]"
                placeholder="Enter your birth country"
              />
            </div>
            <div className="space-y-2">
              <Typography className="text-sm" weight="500">
                Date of Birth
              </Typography>
              <Input className="rounded-[9px]" type="date" />
            </div>
          </div>

          <div className="space-y-2">
            <Typography className="text-sm" weight="500">
              Description
            </Typography>
            <Textarea
              className="rounded-[9px] min-h-[120px]"
              placeholder="Write your bio here..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              className="px-8 py-2 bg-gradient-to-r from-[#F2D356] to-[#DC6033] hover:opacity-90 transition-opacity"
              label="Edit"
            />
            <Button
              className="px-8 py-2 bg-gradient-to-r from-[#5656F2] to-[#3333DC] hover:opacity-90 transition-opacity"
              label="Save"
            />
          </div>
        </form>
      </Container>
    </div>
  );
}
