import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      title: "🤖 AI Resume Analysis",
      description:
        "Upload your resume and receive detailed AI-powered feedback with improvement suggestions.",
    },
    {
      title: "📊 ATS Score",
      description:
        "Check how well your resume matches Applicant Tracking Systems and improve your chances.",
    },
    {
      title: "❓ AI Interview Questions",
      description:
        "Generate personalized HR and technical interview questions based on your resume.",
    },
    {
      title: "🎤 Mock Interview",
      description:
        "Practice interview rounds with AI and receive instant feedback on your answers.",
    },
    {
      title: "🎙️ Voice Interview",
      description:
        "Answer interview questions using your voice and get AI-powered evaluation.",
    },
    {
      title: "📈 Progress Analytics",
      description:
        "Track your interview practice, resume uploads, and overall preparation progress.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-800">
            Powerful Features
          </h2>

          <p className="text-gray-600 text-lg mt-4">
            Everything you need to crack your dream job interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}