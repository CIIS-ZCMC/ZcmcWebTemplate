import Dashboard from "../pages/Dashboard/Dashboard";
import { LuLayoutDashboard } from "react-icons/lu";
import TableUI from "../pages/Table/TableUI";
import Card from "../pages/Card/Card";

export const sidebarRoutes = [
  {
    path: "/dashboard", // DASHBOARD
    name: "Dashboard",
    description: "This is a sample description for dashboard page",
    element: <Dashboard />,
    icon: <LuLayoutDashboard />,
    code: "PRM-REQ",
    permissions: ["view"],
  },
  {
    path: "/table", // DASHBOARD
    name: "Table",
    description: "This is a sample description for table UI",
    element: <TableUI />,
    icon: <LuLayoutDashboard />,
    code: "PRM-REQ",
    permissions: ["view"],
  },
  {
    path: "/card", // DASHBOARD
    name: "Card",
    description: "This is a sample description for card UI",
    element: <Card />,
    icon: <LuLayoutDashboard />,
    code: "PRM-REQ",
    permissions: ["view"],
  },
];
