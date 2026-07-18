import { useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/layout/DashboardLayout";
import { UploadCloud, Copy, Sparkles } from "lucide-react";

const InterviewQuestions = () => {
  const [file, setFile] = useState<File | null>(null);
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {
    if (!file) {
      alert("Select Resume");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const response = await axios.post(
        "https://interviewgenieai-backend-v67z.onrender.com/generate-questions",
        formData
      );

      setQuestions(response.data.questions);
    } catch (error) {
      alert("Unable to Generate Questions");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const copyQuestions = () => {
    navigator.clipboard.writeText(questions);
    alert("Copied!");
  };

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        AI Interview Questions
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="border-2 border-dashed border-indigo-500 rounded-xl p-10 text-center">

          <UploadCloud
            size={60}
            className="mx-auto text-indigo-600"
          />

          <h2 className="mt-5 text-xl font-semibold">
            Upload Resume
          </h2>

          <input
            type="file"
            accept=".pdf"
            className="mt-5"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
          />

          <button
            onClick={generateQuestions}
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl"
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>

        </div>

        {questions && (

          <div className="mt-10">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Sparkles />
                AI Generated Questions
              </h2>

              <button
                onClick={copyQuestions}
                className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg"
              >
                <Copy size={18} />
                Copy
              </button>

            </div>

            <div className="bg-gray-50 rounded-xl p-6">

              <pre className="whitespace-pre-wrap text-gray-800 leading-8">
                {questions}
              </pre>

            </div>

          </div>

        )}

      </div>

    </DashboardLayout>
  );
};

export default InterviewQuestions;