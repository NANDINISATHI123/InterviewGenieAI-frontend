import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Upload Resume",
      icon: "📄",
      path: "/upload",
      color: "from-blue-500 to-cyan-500",
      description: "Upload your resume and get AI analysis",
    },
    {
      title: "ATS Score",
      icon: "📊",
      path: "/ats-score",
      color: "from-green-500 to-emerald-500",
      description: "Check resume ATS compatibility",
    },
    {
      title: "AI Questions",
      icon: "❓",
      path: "/interview-questions",
      color: "from-purple-500 to-pink-500",
      description: "Generate interview questions instantly",
    },
    {
      title: "Mock Interview",
      icon: "🎤",
      path: "/mock-interview",
      color: "from-orange-500 to-red-500",
      description: "Practice AI-powered mock interviews",
    },
    {
      title: "Voice Interview",
      icon: "🎙️",
      path: "/voice-interview",
      color: "from-indigo-500 to-violet-500",
      description: "Real-time voice interview practice",
    },
    {
      title: "Interview History",
      icon: "📈",
      path: "/interview-history",
      color: "from-yellow-500 to-orange-500",
      description: "View your previous interview sessions",
    },
    {
      title: "Resume History",
      icon: "📜",
      path: "/resume-history",
      color: "from-teal-500 to-cyan-500",
      description: "Access uploaded resumes anytime",
    },
    {
      title: "Profile",
      icon: "👤",
      path: "/profile",
      color: "from-pink-500 to-rose-500",
      description: "Manage your profile and settings",
    },
  ];

  const email = localStorage.getItem("email");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">

      {/* Header */}
      <div className="px-10 py-8 flex justify-between items-center">

        <div>
          <h1 className="text-5xl font-extrabold">
            🤖 InterviewGenieAI
          </h1>

          <p className="mt-3 text-lg text-gray-300">
            AI Powered Resume Analyzer & Interview Preparation Platform
          </p>

          <p className="mt-2 text-cyan-300">
            Welcome {email || "User"} 👋
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
          className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold transition duration-300"
        >
          Logout
        </button>

      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-3 gap-6 px-10">

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h2 className="text-4xl">📄</h2>

          <h3 className="mt-3 text-2xl font-bold">
            Resume Analysis
          </h3>

          <p className="text-gray-300 mt-2">
            Upload resumes and receive AI-powered feedback.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h2 className="text-4xl">🤖</h2>

          <h3 className="mt-3 text-2xl font-bold">
            AI Interview
          </h3>

          <p className="text-gray-300 mt-2">
            Practice technical and HR interviews with AI.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h2 className="text-4xl">🚀</h2>

          <h3 className="mt-3 text-2xl font-bold">
            Placement Ready
          </h3>

          <p className="text-gray-300 mt-2">
            Improve your confidence for top company interviews.
          </p>
        </div>

      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-4 gap-8 px-10 py-12">

        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => navigate(card.path)}
            className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:shadow-blue-500/40 transition duration-300"
          >

            <div
              className={`bg-gradient-to-r ${card.color} h-28 flex items-center justify-center text-6xl`}
            >
              {card.icon}
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-bold text-gray-800">
                {card.title}
              </h2>

              <p className="text-gray-600 mt-3">
                {card.description}
              </p>

              <button
                className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Open →
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 pb-8">
        © 2026 InterviewGenieAI | AI Powered Career Assistant
      </div>

    </div>
  );
}