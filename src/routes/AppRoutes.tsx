import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import ResumeAnalysis from "../pages/ResumeAnalysis";
import MockInterview from "../pages/MockInterview";
import InterviewQuestions from "../pages/InterviewQuestions";
import Analytics from "../pages/Analytics";
import History from "../pages/History";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

import NotFound from "../pages/NotFound";





function ProtectedRoute({
    children
}:{
    children: React.ReactNode
}){


const token = localStorage.getItem(
    "access_token"
);



if(!token){

    return <Navigate to="/login" replace />;

}


return children;


}







export default function AppRoutes(){


return(


<Routes>


{/* Public Routes */}


<Route

path="/login"

element={<Login/>}

/>



<Route

path="/register"

element={<Register/>}

/>







{/* Protected Routes */}



<Route

path="/dashboard"

element={

<ProtectedRoute>

<Dashboard/>

</ProtectedRoute>

}

/>




<Route

path="/resume-analysis"

element={

<ProtectedRoute>

<ResumeAnalysis/>

</ProtectedRoute>

}

/>





<Route

path="/mock-interview"

element={

<ProtectedRoute>

<MockInterview/>

</ProtectedRoute>

}

/>





<Route

path="/interview-questions"

element={

<ProtectedRoute>

<InterviewQuestions/>

</ProtectedRoute>

}

/>





<Route

path="/analytics"

element={

<ProtectedRoute>

<Analytics/>

</ProtectedRoute>

}

/>





<Route

path="/history"

element={

<ProtectedRoute>

<History/>

</ProtectedRoute>

}

/>





<Route

path="/profile"

element={

<ProtectedRoute>

<Profile/>

</ProtectedRoute>

}

/>





<Route

path="/settings"

element={

<ProtectedRoute>

<Settings/>

</ProtectedRoute>

}

/>







{/* Default Redirect */}



<Route

path="/"

element={

<Navigate to="/dashboard" replace />

}

/>







{/* 404 Page */}



<Route

path="*"

element={<NotFound/>}

/>



</Routes>


)


}