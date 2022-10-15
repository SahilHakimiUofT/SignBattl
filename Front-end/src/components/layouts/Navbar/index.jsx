import { Link } from "react-scroll";
import "./index.scss";
const Navbar = (props) => {
  return (
    <nav>
      <div className="logo"></div>
      <div className="navItems">
        <ul>
          {props.navItems.map((item, index) => (
            <li key={index}>
              <Link activeClass="active" to={item.to} spy={true} smooth={true} offset={-70} duration={500}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
