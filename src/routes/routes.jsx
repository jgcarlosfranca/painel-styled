import { FaHome, FaCalendarAlt, FaTools, FaModx } from "react-icons/fa";
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
  {
    path: "/Modal",
    name: "Modal",
    icon: <FaModx />,
  },
];

export default routes;
