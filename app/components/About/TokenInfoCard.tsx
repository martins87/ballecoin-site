import { FC } from "react";
import { motion } from "framer-motion";

type TokenInfoCardProps = {
  icon: React.ReactNode;
  title: string;
  descriptions: string[];
};

const TokenInfoCard: FC<TokenInfoCardProps> = ({
  icon,
  title,
  descriptions,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
    >
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">
        {title}
      </h2>
      {descriptions.map((desc, index) => (
        <p key={index} className="text-gray-600 mb-2 text-center">
          {desc}
        </p>
      ))}
    </motion.div>
  );
};

export default TokenInfoCard;
