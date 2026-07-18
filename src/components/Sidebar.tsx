import {
  LayoutDashboard,
  Upload,
  FileSearch,
  MessageSquare,
  BarChart3,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Upload Resume", icon: Upload, path: "/upload" },
    { name: "ATS Score", icon: FileSearch, path: "/ats" },
    { name: "Interview", icon: MessageSquare, path: "/interview" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <aside className="w-64 bg-indigo-700 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-10">
        InterviewGenie AI
      </h1>

      <nav className="space-y-3">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 rounded-lg p-3 transition hover:bg-indigo-600"
          >
            <item.icon size={20} />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
