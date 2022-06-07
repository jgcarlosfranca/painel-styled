import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs"; 


const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUser />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <MdMessage />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <BiAnalyse />,
    },
    // {
    //   path: "/file-manager",
    //   name: "File Manager",
    //   icon: <AiTwotoneFileExclamation />,
    //   subRoutes: [
    //     {
    //       path: "/settings/profile",
    //       name: "Profile ",
    //       icon: <FaUser />,
    //     },
    //     {
    //       path: "/settings/2fa",
    //       name: "2FA",
    //       icon: <FaLock />,
    //     },
    //     {
    //       path: "/settings/billing",
    //       name: "Billing",
    //       icon: <FaMoneyBill />,
    //     },
    //   ],
    // },
    // {
    //   path: "/order",
    //   name: "Order",
    //   icon: <BsCartCheck />,
    // },
    // {
    //   path: "/settings",
    //   name: "Settings",
    //   icon: <BiCog />,
    //   exact: true,
    //   subRoutes: [
    //     {
    //       path: "/settings/profile",
    //       name: "Profile ",
    //       icon: <FaUser />,
    //     },
    //     {
    //       path: "/settings/2fa",
    //       name: "2FA",
    //       icon: <FaLock />,
    //     },
    //     {
    //       path: "/settings/billing",
    //       name: "Billing",
    //       icon: <FaMoneyBill />,
    //     },
    //   ],
    // },
    // {
    //   path: "/saved",
    //   name: "Saved",
    //   icon: <AiFillHeart />,
    // },
  ];

  
export default routes;