import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const API_URL =
  "https://interviewgenieai-backend-v67z.onrender.com";

export default function VoiceInterview() {
  const [question] = useState(
    "Explain Object Oriented Programming in Python."
  );

  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    transcript,
    resetTranscript,
  } = useSpeechRecognition();

  const startListening = () => {
    resetTranscript();

    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const submitAnswer = async () => {
    if (!transcript.trim()) {
      alert("Please speak your answer first.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/evaluate-answer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: localStorage.getItem("email"),
            question: question,
            answer: transcript,
          }),
        }
      );

      const data = await response.json();

      setFeedback(data.feedback || "No feedback received.");
    } catch (error) {
      console.error(error);
      alert("Failed to evaluate answer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          🎙️ AI Voice Interview
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5 mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Interview Question
          </h2>

          <p className="text-gray-700 text-lg">
            {question}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">

          <button
            onClick={startListening}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
          >
            🎤 Start Speaking
          </button>

          <button
            onClick={stopListening}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition"
          >
            ⏹ Stop
          </button>

          <button
            onClick={submitAnswer}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Evaluating..." : "📤 Submit Answer"}
          </button>

        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Your Answer
          </h2>

          <div className="bg-gray-100 rounded-lg p-5 min-h-[150px] whitespace-pre-wrap">
            {transcript || "Your spoken answer will appear here..."}
          </div>
        </div>

        {feedback && (
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-blue-700">
              🤖 AI Feedback
            </h2>

            <div className="bg-blue-50 rounded-lg p-5 whitespace-pre-wrap border border-blue-200">
              {feedback}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}