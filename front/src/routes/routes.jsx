import {
  FaHome,
  FaCalendarAlt,
  FaTools,
  FaModx,
  FaWpforms,
} from "react-icons/fa";
import { GoRepoPush } from "react-icons/go";
import { SiRedux } from "react-icons/si";
import { ImLab } from "react-icons/im";
import { paths } from "./paths";

const routes = [
  {
    path: paths.Root,
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: paths.Beautify,
    name: "Lab Beautify",
    icon: <ImLab />,
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
    name: "Redux with Thunk",
    icon: <SiRedux />,
  },
  {
    path: paths.ReduxSimple,
    name: "Redux Simple",
    icon: <SiRedux />,
  },
  {
    path: paths.Tools,
    name: "Tools",
    icon: <FaTools />,
  },
  {
    path: paths.LabFont,
    name: "Lab Fonts",
    icon: <ImLab />,
  },
  {
    path: paths.Table,
    name: "Tables",
    icon: <ImLab />,
  },
];

export default routes;
