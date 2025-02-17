import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Dancer = {
  _id: string;
  name: string;
  email: string;
  picture: string | StaticImport;
  residenceCountry: string;
  solanaAddress: string;
  birthCountry: string;
  description: string;
  instagram: string;
  balletSchool: string;
}