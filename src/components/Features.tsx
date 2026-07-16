import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="py-16 px-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Features
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="🤖 AI Resume Analyzer"
          description="Upload your resume and receive AI-powered suggestions to improve it."
        />

        <FeatureCard
          title="🎤 Mock Interviews"
          description="Practice technical and HR interviews with AI-generated questions."
        />

        <FeatureCard
          title="📈 DSA Tracker"
          description="Track your coding progress and stay consistent with interview preparation."
        />
      </div>
    </section>
  );
};

export default Features;