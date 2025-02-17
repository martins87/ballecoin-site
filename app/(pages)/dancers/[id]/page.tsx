"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import Typography from '@/app/components/Typography';
import Container from '@/app/components/ui/Container';
// import { getDancerById } from '@/app/lib/db';
import CenteredElement from '@/app/components/ui/CenteredElement';
import LoadingModal from "@/app/components/LoadingModal";
import User from "../../../assets/images/user.png";
import { dancers as mockedDancers } from '@/app/constants/dancers'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// @ts-expect-error:next-line
const DancerPage = ({ params }) => {
  const [id] = useState<string>(params.id);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  const [residenceCountry, setResidenceCountry] = useState<string>("");
  const [balletSchool, setBalletSchool] = useState<string>("");
  const [solanaAddress, setSolanaAddress] = useState<string>("");
  const [birthCountry, setBirthCountry] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [picture, setPicture] = useState<string | StaticImport>("");

  useEffect(() => {
    const getDancer = async () => {
      setLoading(true);
      // const dancer = await getDancerById(params.id);
      // const dancer = await getDancerById(id);
      const dancer = mockedDancers.find(dancer => dancer._id === id)!;
      setLoading(false);
      // console.log("dancer gotten from database", dancer);

      setName(dancer.name);
      // setEmail(dancer.email);
      setResidenceCountry(dancer.residenceCountry);
      setBalletSchool(dancer.balletSchool);
      setSolanaAddress(dancer.solanaAddress);
      setBirthCountry(dancer.birthCountry);
      setDescription(dancer.description);
      setInstagram(dancer.instagram);
      setPicture(dancer.picture);
    };

    getDancer();
  }, [id]);

  return (
    <>
      <Container>
        <CenteredElement className='my-14'>
          <Typography className='text-5xl' weight='600'>{name}</Typography>
        </CenteredElement>
        <CenteredElement
          className="flex-col md:flex-row gap-x-10 gap-y-10 p-8 mb-20 bg-[#FFFFFF] [box-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[15px]"
          items='start'
          >
          <CenteredElement className='w-full md:w-1/2'>
            <Image
              width={52}
              height={52}
              className="w-full rounded-lg overflow-hidden hover:cursor-pointer object-cover"
              src={picture || User}
              alt="Profile img"
              priority
              // unoptimized={typeof picture === "string"}
              unoptimized
              />
          </CenteredElement>
          <CenteredElement className='w-full md:w-1/2 gap-y-4' direction="col" items='start'>
            <CenteredElement className='gap-x-2' justify='start'>
              <Typography weight='700'>Birth country:</Typography>
              <Typography>{birthCountry}</Typography>
            </CenteredElement>
            <CenteredElement className='gap-x-2' justify='start'>
              <Typography weight='700'>Residence country:</Typography>
              <Typography>{residenceCountry}</Typography>
            </CenteredElement>
            <CenteredElement className='gap-x-2' justify='start'>
              <Typography weight='700'>Ballet school:</Typography>
              <Typography>{balletSchool}</Typography>
            </CenteredElement>
            <CenteredElement className='gap-x-2' direction='col' items='start' justify='start'>
              <Typography weight='700'>SOLANA address:</Typography>
              <Typography className='text-xs md:text-base'>{solanaAddress}</Typography>
            </CenteredElement>
            <CenteredElement className='gap-x-2' justify='start'>
              <Typography weight='700'>Instagram:</Typography>
              <Typography>{instagram}</Typography>
            </CenteredElement>
            <CenteredElement className='gap-x-2' direction='col' items='start' justify='start'>
              <Typography weight='700'>Description:</Typography>
              <Typography>{description}</Typography>
            </CenteredElement>
          </CenteredElement>
        </CenteredElement>
      </Container>
      {loading && <LoadingModal text="Loading Dancer..." />}
    </>
  )
}

export default DancerPage;