import { useState } from "react";
import api from "../services/api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import {
  UploadCloud,
  CheckCircle2,
  BrainCircuit,
  FileText,
  Sparkles,
} from "lucide-react";

export default function ATSScore() {

  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState("");

  const [score, setScore] = useState(0);

  const calculateATS = async () => {

    if (!file) return;

    const form = new FormData();

    form.append("resume", file);

    setLoading(true);

    try {

      const res = await api.post(
        "/ats-score",
        form,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      const data = res.data.ats_score;

      setResult(data);

      const match = data.match(/ATS Score:\s*(\d+)/i);

      if (match) {

        setScore(Number(match[1]));

      }

    } catch (err) {

      console.log(err);

      alert("Unable to calculate ATS score");

    }

    setLoading(false);

  };

  return (

    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="max-w-7xl mx-auto p-8">

          <h1 className="text-4xl font-bold">

            ATS Resume Score

          </h1>

          <p className="text-gray-500 mt-2">

            Upload a resume and check how ATS friendly it is.

          </p>

          {/* Upload Card */}

          <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">

            <label className="border-2 border-dashed border-indigo-400 rounded-3xl h-52 flex flex-col items-center justify-center cursor-pointer hover:bg-indigo-50">

              <UploadCloud
                size={60}
                className="text-indigo-600"
              />

              <h2 className="text-xl font-semibold mt-4">

                Upload Resume

              </h2>

              <input
                hidden
                type="file"
                accept=".pdf"
                onChange={(e) => {

                  if (e.target.files)

                    setFile(e.target.files[0]);

                }}
              />

            </label>

            {file && (

              <div className="mt-6 flex items-center gap-3">

                <FileText className="text-red-500" />

                <p>{file.name}</p>

              </div>

            )}

            <button
              onClick={calculateATS}
              className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700"
            >

              {loading
                ? "Calculating..."
                : "Check ATS Score"}

            </button>

          </div>

          {/* Results */}

          {result && (

            <div className="grid lg:grid-cols-3 gap-8 mt-10">

              {/* Score */}

              <div className="bg-white rounded-3xl shadow-lg p-8">

                <h2 className="font-bold text-xl mb-6">

                  ATS Score

                </h2>

                <div className="w-52 mx-auto">

                  <CircularProgressbar
                    value={score}
                    text={`${score}%`}
                    styles={buildStyles({
                      pathColor: "#4f46e5",
                      textColor: "#111827",
                      trailColor: "#E5E7EB",
                    })}
                  />

                </div>

              </div>

              {/* Summary */}

              <div className="bg-white rounded-3xl shadow-lg p-8">

                <div className="flex gap-3">

                  <BrainCircuit className="text-indigo-600"/>

                  <h2 className="font-bold text-xl">

                    Resume Analysis

                  </h2>

                </div>

                <pre className="whitespace-pre-wrap mt-6 text-gray-700 font-sans">

{result}

                </pre>

              </div>

              {/* Tips */}

              <div className="bg-white rounded-3xl shadow-lg p-8">

                <div className="flex gap-3">

                  <Sparkles className="text-yellow-500"/>

                  <h2 className="font-bold text-xl">

                    Improvement Tips

                  </h2>

                </div>

                <div className="space-y-4 mt-6">

                  <div className="flex gap-3">

                    <CheckCircle2 className="text-green-600"/>

                    <p>Add measurable achievements.</p>

                  </div>

                  <div className="flex gap-3">

                    <CheckCircle2 className="text-green-600"/>

                    <p>Include more technical keywords.</p>

                  </div>

                  <div className="flex gap-3">

                    <CheckCircle2 className="text-green-600"/>

                    <p>Keep resume ATS friendly.</p>

                  </div>

                  <div className="flex gap-3">

                    <CheckCircle2 className="text-green-600"/>

                    <p>Use action verbs.</p>

                  </div>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}