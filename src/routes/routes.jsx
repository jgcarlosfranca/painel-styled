import { FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/Calendar",
    name: "Calendar",
    icon: <FaUser />,
  },
  {
    path: "/Reports",
    name: "Reports",
    icon: <MdMessage />,
  },
  {
    path: "/Tools",
    name: "Tools",
    icon: <BiAnalyse />,
  },
  
];

export default routes;
