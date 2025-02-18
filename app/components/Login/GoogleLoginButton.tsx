import Image from "next/image";
import { redirect } from "next/navigation";

import GoogleLogo from "../../assets/icons/google.svg";

const GoogleLoginButton = () => {
  return (
    <button
      className="h-12 py-2 px-14 text-base border rounded-lg shadow-md text-black font-[family-name:var(--font-inter)] flex items-center justify-center gap-3 bg-white hover:cursor-pointer hover:bg-gray-50/50 transition-all duration-200"
      // onClick={() => redirect("/api/auth/signin/")}
      onClick={() => redirect("https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=416841535669-vehao8rc8nfs386h48ba94c89e5bhtku.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2Fballecoin-site.vercel.app%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=5hQZqkfMM_E18t_UBjjammKznk4GXVQO3SJ1YPL_FiU&code_challenge=0Gq8nJjGmkcJvG57_fPUAgNFuw2tzEaDjFFyY1oaRAw&code_challenge_method=S256&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow")}
    >
      <Image className="w-5" src={GoogleLogo} alt="google icon" />
      Entrar com Google
    </button>
  );
};

export default GoogleLoginButton;
