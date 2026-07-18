import { useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/layout/DashboardLayout";
import { UploadCloud, FileText } from "lucide-react";

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Please choose a resume.");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const response = await axios.post(
        "https://interviewgenieai-backend-v67z.onrender.com/upload-resume",
        formData
      );

      setAnalysis(response.data.analysis);
    } catch (error) {
      alert("Unable to upload resume.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Resume Upload
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="border-2 border-dashed border-indigo-400 rounded-xl p-12 text-center">

          <UploadCloud
            className="mx-auto text-indigo-600"
            size={60}
          />

          <h2 className="mt-5 text-xl font-semibold">
            Drag & Drop Resume
          </h2>

          <p className="text-gray-500 mt-2">
            PDF only
          </p>

          <input
            type="file"
            accept=".pdf"
            className="mt-6"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
          />

          {file && (
            <div className="flex justify-center items-center gap-2 mt-6 text-green-600">
              <FileText />
              {file.name}
            </div>
          )}

          <button
            onClick={handleUpload}
            className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl"
          >
            {loading ? "Uploading..." : "Upload Resume"}
          </button>

        </div>

        {analysis && (
          <div className="mt-10 bg-gray-50 rounded-xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              AI Resume Analysis
            </h2>

            <pre className="whitespace-pre-wrap">
              {analysis}
            </pre>

          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default ResumeUpload;