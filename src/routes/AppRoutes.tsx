import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "../components/Layout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";

import ResumeUpload from "../pages/ResumeUpload";
import ResumeHistory from "../pages/ResumeHistory";

import ATSScore from "../pages/ATSScore";

import InterviewQuestions from "../pages/InterviewQuestions";

import MockInterview from "../pages/MockInterview";

import InterviewHistory from "../pages/InterviewHistory";

import VoiceInterview from "../pages/VoiceInterview";

import Profile from "../pages/Profile";


import ProtectedRoute from "../components/ProtectedRoute";



function NotFound(){

    return (

        <div className="p-10">

            <h1 className="text-3xl font-bold">

                404 - Page Not Found

            </h1>

        </div>

    );

}




export default function AppRoutes(){


    return (

        <BrowserRouter>


            <Layout>


                <Routes>



                    {/* Public Routes */}


                    <Route

                        path="/"

                        element={<Home />}

                    />



                    <Route

                        path="/login"

                        element={<Login />}

                    />



                    <Route

                        path="/register"

                        element={<Register />}

                    />





                    {/* Protected Routes */}



                    <Route

                        path="/dashboard"

                        element={

                            <ProtectedRoute>

                                <Dashboard />

                            </ProtectedRoute>

                        }

                    />





                    <Route

                        path="/upload"

                        element={

                            <ProtectedRoute>

                                <ResumeUpload />

                            </ProtectedRoute>

                        }

                    />





                    <Route

                        path="/resume-history"

                        element={

                            <ProtectedRoute>

                                <ResumeHistory />

                            </ProtectedRoute>

                        }

                    />





                    <Route

                        path="/ats-score"

                        element={

                            <ProtectedRoute>

                                <ATSScore />

                            </ProtectedRoute>

                        }

                    />





                    <Route

                        path="/interview-questions"

                        element={

                            <ProtectedRoute>

                                <InterviewQuestions />

                            </ProtectedRoute>

                        }

                    />





                    <Route

                        path="/mock-interview"

                        element={

                            <ProtectedRoute>

                                <MockInterview />

                            </ProtectedRoute>

                        }

                    />





                    <Route

                        path="/voice-interview"

                        element={

                            <ProtectedRoute>

                                <VoiceInterview />

                            </ProtectedRoute>

                        }

                    />





                    <Route

                        path="/interview-history"

                        element={

                            <ProtectedRoute>

                                <InterviewHistory />

                            </ProtectedRoute>

                        }

                    />





                    <Route

                        path="/profile"

                        element={

                            <ProtectedRoute>

                                <Profile />

                            </ProtectedRoute>

                        }

                    />

                     <Route

path="/analytics"

element={

<ProtectedRoute>

<Analytics />

</ProtectedRoute>

}

/>



                    {/* 404 */}

                    <Route

                        path="*"

                        element={<NotFound />}

                    />



                </Routes>


            </Layout>


        </BrowserRouter>

    );

}