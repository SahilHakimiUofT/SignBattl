import Navbar from "../layouts/Navbar";
import "./index.scss";
import Landing from "./Landing";
import LearnNPlay from "./LearnNPlay";
const Home = () => {
  const navItems = [
    { to: "home", name: "Home" },
    { to: "learn", name: "Learn 'n Play" },
    { to: "about", name: "About" },
  ];
  return (
    <div>
      <div className="navbar">
        <Navbar className="zoom" navItems={navItems} />
      </div>
      <Landing id="home" />
      <LearnNPlay id="learn" />
    </div>
  );
};
export default Home;
