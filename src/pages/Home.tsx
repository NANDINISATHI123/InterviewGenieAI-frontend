import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📄",
      title: "Resume Analyzer",
      desc: "Upload your resume and receive AI-powered suggestions."
    },
    {
      icon: "📊",
      title: "ATS Score",
      desc: "Measure how ATS-friendly your resume is."
    },
    {
      icon: "❓",
      title: "Interview Questions",
      desc: "Generate personalized technical & HR questions."
    },
    {
      icon: "🎤",
      title: "Mock Interviews",
      desc: "Practice interviews with AI and improve confidence."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center justify-between">

        <div className="lg:w-1/2">

          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 AI Powered Career Assistant
          </span>

          <h1 className="text-6xl font-extrabold leading-tight mt-8">
            Interview
            <span className="text-cyan-400">GenieAI</span>
          </h1>

          <p className="text-xl text-gray-300 mt-8 leading-9">
            Build an ATS-friendly resume, receive AI feedback,
            generate interview questions, and prepare confidently
            for your dream software job.
          </p>

          <div className="flex gap-5 mt-10">

            <button
              onClick={() => navigate("/register")}
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-bold text-lg transition hover:scale-105"
            >
              🚀 Get Started
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition font-semibold"
            >
              Login
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center mt-16 lg:mt-0">

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 w-full max-w-md">

            <div className="text-8xl text-center">
              🤖
            </div>

            <h2 className="text-3xl font-bold text-center mt-5">
              AI Career Assistant
            </h2>

            <p className="text-center text-gray-300 mt-4">
              Resume Analysis • ATS Score • AI Interview Questions • Mock Interviews
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-cyan-500 rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold">100+</h3>
                <p>Interview Questions</p>
              </div>

              <div className="bg-green-500 rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold">AI</h3>
                <p>Resume Analysis</p>
              </div>

              <div className="bg-purple-500 rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold">ATS</h3>
                <p>Resume Score</p>
              </div>

              <div className="bg-orange-500 rounded-xl p-4 text-center">
                <h3 className="text-2xl font-bold">24/7</h3>
                <p>Interview Practice</p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-8 py-10">

        <h2 className="text-4xl font-bold text-center">
          Everything You Need to Crack Interviews
        </h2>

        <p className="text-center text-gray-300 mt-4 text-lg">
          One platform for resume improvement and interview preparation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:scale-105 transition duration-300"
            >

              <div className="text-6xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-white/10 mt-10">

        <h3 className="text-2xl font-bold">
          🤖 InterviewGenieAI
        </h3>

        <p className="text-gray-400 mt-3">
          AI Powered Resume Analyzer & Interview Preparation Platform
        </p>

        <p className="text-gray-500 mt-6">
          © 2026 InterviewGenieAI. Built with ❤️ using React, FastAPI, PostgreSQL & Gemini AI.
        </p>

      </footer>

    </div>
  );
}