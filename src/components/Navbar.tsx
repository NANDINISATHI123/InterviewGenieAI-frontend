import { Bell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 shadow">
      <div className="flex items-center gap-3">
        <Search />
        <input
          className="rounded-lg border p-2 outline-none"
          placeholder="Search..."
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell />
        <img
          src="https://i.pravatar.cc/40"
          className="h-10 w-10 rounded-full"
          alt="Profile"
        />
      </div>
    </header>
  );
};

export default Navbar;