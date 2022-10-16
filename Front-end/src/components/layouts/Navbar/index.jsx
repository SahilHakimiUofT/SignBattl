import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Navbar = (props) => {
  const navigate = useNavigate();
  const navLeaderboard = () => {
    navigate("leaderboard");
  };
  return (
    <nav>
      <div className="logo">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h1>BSL</h1>
        </Link>
      </div>
      <div className="navItems">
        <ul>
          {props.navItems.map((item, index) => (
            <li key={index}>
              <Link
                activeClass="active"
                to={item.to}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li key={3} onClick={navLeaderboard}>
            Lead'n Board
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
