import { useState } from "react";
import axios from "axios";
import DashboardLayout from "../components/layout/DashboardLayout";
import {
  UploadCloud,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const ATSScore = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleATS = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const res = await axios.post(
        "https://interviewgenieai-backend-v67z.onrender.com/ats-score",
        formData
      );

      setResult(res.data.ats_score);
    } catch (err) {
      alert("Unable to calculate ATS Score");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        ATS Resume Score
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="border-2 border-dashed border-indigo-400 rounded-xl p-10 text-center">

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
            className="mt-6"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
          />

          <button
            onClick={handleATS}
            className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-xl"
          >
            {loading ? "Calculating..." : "Calculate ATS"}
          </button>

        </div>

        {result && (
          <div className="mt-10">

            <div className="bg-indigo-600 text-white rounded-2xl p-8 text-center">

              <h2 className="text-xl">
                ATS SCORE
              </h2>

              <div className="text-6xl font-bold mt-4">
                82%
              </div>

            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div className="bg-white border rounded-xl p-5">

                <h3 className="font-bold mb-4">
                  Skills Detected
                </h3>

                <div className="space-y-3">

                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500"/>
                    Python
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500"/>
                    React
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500"/>
                    FastAPI
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500"/>
                    SQL
                  </div>

                </div>

              </div>

              <div className="bg-white border rounded-xl p-5">

                <h3 className="font-bold mb-4">
                  Suggestions
                </h3>

                <div className="space-y-3">

                  <div className="flex gap-2">
                    <AlertTriangle className="text-yellow-500"/>
                    Add Internship Experience
                  </div>

                  <div className="flex gap-2">
                    <AlertTriangle className="text-yellow-500"/>
                    Quantify Projects
                  </div>

                  <div className="flex gap-2">
                    <AlertTriangle className="text-yellow-500"/>
                    Add Certifications
                  </div>

                </div>

              </div>

            </div>

            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <pre className="whitespace-pre-wrap">
                {result}
              </pre>
            </div>

          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default ATSScore;