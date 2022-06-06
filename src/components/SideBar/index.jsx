import "./styles.css";
import { AiFillHome, AiOutlineBarChart, } from "react-icons/ai";
import { MdCatchingPokemon, MdWaves } from "react-icons/md"
import { FaWpforms } from "react-icons/fa"
import { BsFillGrid1X2Fill } from "react-icons/bs"
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <AiFillHome className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/charts" className="link">
              <li className="sidebarListItem active">
                <AiOutlineBarChart className="sidebarIcon" />
                Charts
              </li>
            </Link>
            <Link to="/pokedex" className="link">
              <li className="sidebarListItem active">
                <MdCatchingPokemon className="sidebarIcon" />
                Pokedex
              </li>
            </Link>
            <Link to="/forms" className="link">
              <li className="sidebarListItem active">
                <FaWpforms className="sidebarIcon" />
                Forms
              </li>
            </Link>
            <Link to="/waves" className="link">
              <li className="sidebarListItem active">
                <MdWaves className="sidebarIcon" />
                Waves
              </li>
            </Link>
            <Link to="/grid" className="link">
              <li className="sidebarListItem active">
                <BsFillGrid1X2Fill className="sidebarIcon" />
                Grid
              </li>
            </Link>
          </ul>

          {/* <Link to="/charts" className="link">
              <li className="sidebarListItem">
                <PieChart className="sidebarIcon" />
                Charts
              </li>
            </Link> */}
        </div>
      </div>
    </div>
  );
}
