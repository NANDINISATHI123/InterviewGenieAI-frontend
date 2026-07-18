import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/layout/DashboardLayout";
import {
  FileText,
  Brain,
  BarChart3,
  MessageSquare,
} from "lucide-react";

const Dashboard = () => {
  const [analytics, setAnalytics] = useState({
    total_resumes: 0,
    total_interviews: 0,
    average_score: 0,
  });

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (!email) return;

    axios
      .get(
        `https://interviewgenieai-backend-v67z.onrender.com/analytics/${email}`
      )
      .then((res) => setAnalytics(res.data))
      .catch(console.log);
  }, []);

  return (
    <DashboardLayout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Here's your interview preparation progress.
        </p>

      </div>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <FileText className="text-indigo-600 mb-4" size={35} />

          <h3 className="text-gray-500">
            Resume Uploads
          </h3>

          <p className="text-4xl font-bold mt-3">
            {analytics.total_resumes}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <MessageSquare className="text-green-600 mb-4" size={35} />

          <h3 className="text-gray-500">
            Interviews
          </h3>

          <p className="text-4xl font-bold mt-3">
            {analytics.total_interviews}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <Brain className="text-orange-500 mb-4" size={35} />

          <h3 className="text-gray-500">
            Average Score
          </h3>

          <p className="text-4xl font-bold mt-3">
            {analytics.average_score}%
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <BarChart3 className="text-pink-500 mb-4" size={35} />

          <h3 className="text-gray-500">
            AI Ready
          </h3>

          <p className="text-4xl font-bold mt-3">
            🚀
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-xl font-bold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-4">

            <li>📄 Resume Uploaded</li>

            <li>🤖 ATS Score Generated</li>

            <li>🎤 Mock Interview Completed</li>

          </ul>

        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg text-white p-8">

          <h2 className="text-2xl font-bold">
            Interview Tip
          </h2>

          <p className="mt-5 leading-8">
            Practice explaining your projects using the STAR
            method and always mention measurable outcomes.
          </p>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;