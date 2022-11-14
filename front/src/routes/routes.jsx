import {
  FaHome,
  FaCalendarAlt,
  FaTools,
  FaModx,
  FaWpforms,
} from "react-icons/fa";
import { GoRepoPush } from "react-icons/go";
import { SiRedux } from "react-icons/si";
import { paths } from "./paths";

const routes = [
  {
    path: paths.Root,
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: paths.Calendar,
    name: "Calendar",
    icon: <FaCalendarAlt />,
  },
  {
    path: paths.Forms,
    name: "Forms",
    icon: <FaWpforms />,
  },
  {
    path: paths.Modal,
    name: "Modal",
    icon: <FaModx />,
  },
  {
    path: paths.Reports,
    name: "Reports",
    icon: <GoRepoPush />,
  },
  {
    path: paths.Redux,
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    path: paths.Tools,
    name: "Tools",
    icon: <FaTools />,
  },
];

export default routes;
