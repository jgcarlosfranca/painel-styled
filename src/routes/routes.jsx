import { FaHome, FaCalendarAlt, FaTools } from "react-icons/fa";
import { GoRepoPush } from "react-icons/go";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/Calendar",
    name: "Calendar",
    icon: <FaCalendarAlt />,
  },
  {
    path: "/Reports",
    name: "Reports",
    icon: <GoRepoPush />,
  },
  {
    path: "/Tools",
    name: "Tools",
    icon: <FaTools />,
  },
];

export default routes;
