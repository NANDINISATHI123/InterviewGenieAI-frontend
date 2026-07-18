import { useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  UploadCloud,
  FileText,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function ResumeUpload() {

  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const uploadResume = async () => {

    if (!file) {

      setMessage("Please select a PDF");

      return;

    }

    const formData = new FormData();

    formData.append("resume", file);

    try {

      setLoading(true);

      const response = await api.post(
        "/upload-resume",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message);

    } catch (error) {

      console.log(error);

      setMessage("Upload Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="max-w-4xl mx-auto p-10">

          <h1 className="text-4xl font-bold mb-2">

            Resume Upload

          </h1>

          <p className="text-gray-500 mb-8">

            Upload your latest resume to begin AI analysis.

          </p>

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <label className="border-2 border-dashed border-indigo-400 rounded-3xl h-80 flex flex-col items-center justify-center cursor-pointer hover:bg-indigo-50 transition">

              <UploadCloud
                size={70}
                className="text-indigo-600"
              />

              <h2 className="text-2xl font-semibold mt-5">

                Drag & Drop Resume

              </h2>

              <p className="text-gray-500 mt-2">

                or Click to Browse

              </p>

              <input
                type="file"
                accept=".pdf"
                hidden
                onChange={(e) => {

                  if (e.target.files) {

                    setFile(e.target.files[0]);

                  }

                }}
              />

            </label>

            {file && (

              <div className="mt-8 flex items-center gap-4 bg-slate-100 rounded-xl p-5">

                <FileText
                  className="text-red-600"
                  size={35}
                />

                <div>

                  <h3 className="font-semibold">

                    {file.name}

                  </h3>

                  <p className="text-gray-500">

                    {(file.size / 1024).toFixed(2)} KB

                  </p>

                </div>

              </div>

            )}

            <button
              onClick={uploadResume}
              disabled={loading}
              className="mt-8 w-full bg-indigo-600 text-white py-4 rounded-xl text-lg hover:bg-indigo-700 transition"
            >

              {loading ? (

                <div className="flex justify-center items-center gap-3">

                  <Loader2
                    className="animate-spin"
                    size={20}
                  />

                  Uploading...

                </div>

              ) : (

                "Upload Resume"

              )}

            </button>

            {message && (

              <div className="mt-6 bg-green-100 text-green-700 rounded-xl p-4 flex items-center gap-3">

                <CheckCircle size={22} />

                {message}

              </div>

            )}

          </div>

        </div>

      </div>

    </div>

  );

}