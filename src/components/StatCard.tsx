import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="bg-white rounded-3xl shadow-lg p-6"
    >
      <div className="flex justify-between">

        <div>

          <p className="text-gray-500">{title}</p>

          <h1 className="text-3xl font-bold mt-2">

            {value}

          </h1>

        </div>

        <div className="bg-indigo-100 p-4 rounded-full">

          {icon}

        </div>

      </div>

    </motion.div>
  );
}
