import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ResumeUpload from "../pages/ResumeUpload";
import ATSScore from "../pages/ATSScore";
import InterviewQuestions from "../pages/InterviewQuestions";
import MockInterview from "../pages/MockInterview";
import VoiceInterview from "../pages/VoiceInterview";
import InterviewHistory from "../pages/InterviewHistory";
import ResumeHistory from "../pages/ResumeHistory";
import Analytics from "../pages/Analytics";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<ResumeUpload />} />
          <Route path="/ats-score" element={<ATSScore />} />
          <Route
            path="/interview-questions"
            element={<InterviewQuestions />}
          />
          <Route path="/mock-interview" element={<MockInterview />} />
          <Route path="/voice-interview" element={<VoiceInterview />} />
          <Route
            path="/interview-history"
            element={<InterviewHistory />}
          />
          <Route path="/resume-history" element={<ResumeHistory />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}