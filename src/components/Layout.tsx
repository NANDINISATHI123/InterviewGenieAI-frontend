import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </>
  );
}