import Image from "next/image";
import { redirect } from "next/navigation";

import GoogleLogo from "../../assets/icons/google.svg";

const GoogleLoginButton = () => {
  return (
    <button
      className="h-12 py-2 px-14 text-base border rounded-lg shadow-md text-black font-[family-name:var(--font-inter)] flex items-center justify-center gap-3 bg-white hover:cursor-pointer hover:bg-gray-50/50 transition-all duration-200"
      onClick={() => redirect("/api/auth/signin/")}
    >
      <Image className="w-5" src={GoogleLogo} alt="google icon" />
      Entrar com Google
    </button>
  );
};

export default GoogleLoginButton;
