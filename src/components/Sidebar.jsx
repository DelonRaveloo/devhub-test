import { NavLink } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-100 text-white flex flex-col p-4">
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-600 text-center">
          TASK Management
        </h2>
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink
          to="/assignations"
          className={({ isActive }) =>
            `flex items-center justify-start gap-3 px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              isActive
                ? "text-blue-600 bg-gray-50"
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            }`
          }
        >
          <ListAltIcon fontSize="small" />
          <span>Assignations</span>
        </NavLink>

        <NavLink
          to="/reporting"
          className={({ isActive }) =>
            `flex items-center justify-start gap-3 px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              isActive
                ? "text-blue-600 bg-gray-50"
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            }`
          }
        >
          <BarChartIcon fontSize="small" />
          <span>Reporting</span>
        </NavLink>
      </nav>
    </div>
  );
}
