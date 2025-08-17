import { useState } from "react";
import { Menu, X, LayoutDashboard, Users, Battery, CreditCard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger button - fixed at top */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg border"
        onClick={() => setOpen(!open)}
      >
        <Menu size={24} className="text-gray-700" />
      </button>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 sm:w-80 md:w-64 lg:w-72 bg-white text-gray-900 border-r shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:h-screen md:shadow-none
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Brand */}
        <div className="p-4 sm:p-6 mt-4 text-xl sm:text-2xl flex gap-3 font-bold border-b">
          iTarang <img className="w-6 h-6 sm:w-8 sm:h-8" src="/ienerzy.jpg"/> 
        </div>

        {/* Navigation */}
        <div className="p-4 sm:p-6">
          <p className="text-xs font-semibold text-gray-500 mb-4">MAIN NAVIGATION</p>
          <nav className="flex flex-col gap-3 sm:gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-600 transition-colors text-sm sm:text-base ${
                  isActive ? "font-semibold text-blue-600" : ""
                }`
              }
              onClick={() => setOpen(false)}
            >
              <LayoutDashboard size={18} /> Dashboard
            </NavLink>

            <NavLink
              to="/leads"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-600 transition-colors text-sm sm:text-base ${
                  isActive ? "font-semibold text-blue-600" : ""
                }`
              }
              onClick={() => setOpen(false)}
            >
              <Users size={18} /> Lead Management
            </NavLink>

            <NavLink
              to="/batteries"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-600 transition-colors text-sm sm:text-base ${
                  isActive ? "font-semibold text-blue-600" : ""
                }`
              }
              onClick={() => setOpen(false)}
            >
              <Battery size={18} /> Battery Tracking
            </NavLink>

            <NavLink
              to="/finance"
              className={({ isActive }) =>
                `flex items-center gap-2 hover:text-gray-600 transition-colors text-sm sm:text-base ${
                  isActive ? "font-semibold text-blue-600" : ""
                }`
              }
              onClick={() => setOpen(false)}
            >
              <CreditCard size={18} /> Finance & EMI
            </NavLink>
          </nav>
        </div>

        {/* Quick Stats */}
        <div className="p-4 sm:p-6">
          <p className="text-xs font-semibold text-gray-500 mb-4">QUICK STATS</p>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex justify-between">
              <span>Active Batteries</span>
              <span className="text-blue-600 font-semibold">56</span>
            </li>
            <li className="flex justify-between">
              <span>Pending EMIs</span>
              <span className="text-red-600 font-semibold">23</span>
            </li>
            <li className="flex justify-between">
              <span>New Leads</span>
              <span className="text-green-600 font-semibold">45</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
