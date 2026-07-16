type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-semibold text-blue-700 mb-3">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;