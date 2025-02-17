"use client";

import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";

import CenteredElement from "../ui/CenteredElement";
import DancerCard from "./DancerCard";
import Typography from "../Typography";
// import { getDancers } from "@/app/lib/db";
import { Dancer } from "@/app/types/dancer";
import { dancers as mockedDancers } from "../../constants/dancers";

type DancersProps = {
  heroSection?: boolean;
};

const Dancers: FC<DancersProps> = ({ heroSection }) => {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [dancers, setDancers] = useState<Dancer[]>([]);
  const [numOfItems, setNumOfItems] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      // const users = await getDancers();
      const users = mockedDancers;
      console.log('Dancers:', users);
      setLoading(false);
      setDancers(users);
      setNumOfItems(state => isMobile && !!heroSection ? state : users.length)
    };

    getData();
  }, [heroSection, isMobile]);

  const handleClick = (dancerId: string) => {
    router.push(`/dancers/${dancerId}`);
  }

  return (
    <>
      <div className="w-[90%] sm:w-[75%] mb-20 text-center">
        <Typography
          className="text-4xl sm:text-6xl text-[#008CFF]"
          weight="700"
        >
          {/* Talentos */}
          Talents
        </Typography>
        <Typography className="text-4xl sm:text-6xl text-black" weight="700">
          {/* &nbsp;que precisam do */}
          &nbsp;that need
        </Typography>
        <Typography
          className="text-4xl sm:text-6xl text-[#008CFF]"
          weight="700"
        >
          {/* &nbsp;seu apoio */}
          &nbsp;your support
        </Typography>
      </div>
      {loading ? 
        (<CenteredElement className="mb-20">
          <Typography className="text-xl">Loading dancers...</Typography>
        </CenteredElement>)
        : (<CenteredElement
          className="grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 tablet:grid-cols-4 gap-2 mb-10"
          >
          {dancers
            .filter((dancer: Dancer) => {
              return dancer.email !== "martinsda@gmail.com" && dancer.email !== "cristiansolutchak@gmail.com"
            })
            .slice(0, numOfItems).map((dancer: Dancer, index: number) => (
            <div key={index} onClick={() => handleClick(dancer._id)}>
              <DancerCard
                index={index}
                // key={index}
                name={dancer.name!}
                description={dancer.description!}
                img={dancer.picture}
                />
            </div>
          ))}
        </CenteredElement>)
      }
    </>
  );
};

export default Dancers;
