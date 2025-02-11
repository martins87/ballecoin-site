"use client";

import { CoinsIcon as CoinIcon, Flame, Lock } from "lucide-react";

import TokenInfoCard from "./TokenInfoCard";

const AboutToken = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <TokenInfoCard
          icon={<CoinIcon className="w-12 h-12 text-blue-500" />}
          title="Maximum Supply and Minting Disabled"
          descriptions={[
            "The token has a fixed maximum supply, with no possibility of new emissions.",
            "The minting process has been permanently disabled to ensure scarcity and security.",
          ]}
        />

        <TokenInfoCard
          icon={<Flame className="w-12 h-12 text-orange-500" />}
          title="Token Burn for Liquidity Enhancement"
          descriptions={[
            "Implementation of a token burn mechanism to strengthen liquidity.",
            "Reduction of the circulating supply to increase the project's reliability.",
          ]}
        />

        <TokenInfoCard
          icon={<Lock className="w-12 h-12 text-green-500" />}
          title="Security and Transparency on the Blockchain"
          descriptions={[
            "Immutable and transparent record on the Solana blockchain.",
            "Auditable code, with no hidden functions or abusive administrative permissions.",
          ]}
        />
      </div>
    </div>
  );
};

export default AboutToken;
