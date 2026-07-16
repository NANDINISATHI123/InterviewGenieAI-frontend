import { useState } from "react";

export default function InterviewQuestions() {
  const [file, setFile] = useState<File | null>(null);
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {
    if (!file) {
      alert("Please select a PDF resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const response = await fetch(
        "https://interviewgenieai-backend-v67z.onrender.com/generate-questions",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setQuestions(data.questions || "No questions generated.");
      } else {
        alert(data.message || "Failed to generate questions.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const copyQuestions = () => {
    navigator.clipboard.writeText(questions);
    alert("Questions copied successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-10">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold">
          🤖 AI Interview Question Generator
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          Upload your resume and generate personalized technical and HR interview questions.
        </p>
      </div>

      {/* Upload Card */}
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">

        <h2 className="text-2xl font-bold text-center mb-6">
          📄 Upload Resume
        </h2>

        <label className="border-2 border-dashed border-cyan-400 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 transition">

          <span className="text-6xl mb-4">📁</span>

          <p className="text-lg font-semibold">
            Click to choose your PDF resume
          </p>

          <p className="text-gray-300 mt-2">
            PDF files only
          </p>

          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]);
              }
            }}
          />

        </label>

        {file && (
          <div className="mt-5 text-center">
            <p className="text-green-300">
              ✅ {file.name}
            </p>
          </div>
        )}

        <button
          onClick={generateQuestions}
          disabled={loading}
          className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 transition text-white font-bold py-4 rounded-xl text-lg"
        >
          {loading ? "Generating Questions..." : "🚀 Generate Interview Questions"}
        </button>

      </div>

      {/* Questions */}
      <div className="max-w-6xl mx-auto mt-12">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-bold text-blue-700">
              📝 AI Generated Questions
            </h2>

            {questions && (
              <button
                onClick={copyQuestions}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
              >
                📋 Copy
              </button>
            )}

          </div>

          <div className="bg-gray-100 rounded-xl p-6 h-[500px] overflow-y-auto whitespace-pre-wrap text-gray-800">

            {loading ? (
              <div className="text-center text-blue-600 text-xl font-semibold">
                ⏳ AI is generating interview questions...
              </div>
            ) : (
              questions || "Your personalized interview questions will appear here."
            )}

          </div>

        </div>

      </div>

    </div>
  );
}