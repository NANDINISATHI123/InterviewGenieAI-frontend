import { useState } from "react";

export default function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const response = await fetch(
        "https://interviewgenieai-backend-v67z.onrender.com/upload-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        setResumeText(data.resume_text || "");
        setAnalysis(data.analysis || "");
      } else {
        alert(data.message || "Upload failed");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-10 text-white">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold">
          🤖 AI Resume Analyzer
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          Upload your resume and receive AI-powered feedback,
          ATS suggestions and interview preparation.
        </p>
      </div>

      {/* Upload Card */}
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">

        <h2 className="text-2xl font-bold text-center mb-6">
          📄 Upload Resume
        </h2>

        <label
          className="border-2 border-dashed border-cyan-400 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 transition"
        >
          <span className="text-6xl mb-4">📁</span>

          <p className="text-lg font-semibold">
            Click here to choose your PDF resume
          </p>

          <p className="text-gray-300 mt-2">
            Only PDF files are supported
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
          onClick={handleUpload}
          disabled={loading}
          className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 transition text-white font-bold py-4 rounded-xl text-lg"
        >
          {loading ? "Analyzing Resume..." : "🚀 Analyze Resume"}
        </button>
      </div>

      {/* Resume Text */}
      <div className="max-w-6xl mx-auto mt-12">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            📄 Extracted Resume
          </h2>

          <div className="bg-gray-100 rounded-xl p-6 h-80 overflow-y-auto text-gray-800 whitespace-pre-wrap">
            {resumeText || "Resume text will appear here after upload."}
          </div>

        </div>

      </div>

      {/* AI Analysis */}
      <div className="max-w-6xl mx-auto mt-10">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-green-700 mb-6">
            🤖 AI Resume Analysis
          </h2>

          <div className="bg-green-50 rounded-xl p-6 h-96 overflow-y-auto whitespace-pre-wrap text-gray-800">
            {analysis || "AI analysis will appear here after upload."}
          </div>

        </div>

      </div>

    </div>
  );
}