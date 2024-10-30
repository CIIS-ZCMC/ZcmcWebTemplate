import Dashboard from "../pages/Dashboard/Dashboard";
import { LuLayoutDashboard } from "react-icons/lu";

export const sidebarRoutes = [
  {
    path: "/dashboard", // DASHBOARD
    name: "Dashboard",
    element: <Dashboard />,
    icon: <LuLayoutDashboard />,
    code: "PRM-REQ",
    permissions: ["view"],
  },
];
