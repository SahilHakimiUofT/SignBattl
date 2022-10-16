import Navbar from "../layouts/Navbar";
import "./index.scss";
import Landing from "./Landing";
import LearnNPlay from "./LearnNPlay";
import { motion } from "framer-motion";
const Home = () => {
  const navItems = [
    { to: "home", name: "Home" },
    { to: "learn", name: "Learn 'n Play" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="navbar">
        <Navbar className="zoom" navItems={navItems} />
      </div>
      <Landing id="home" />
      <LearnNPlay id="learn" />
    </motion.div>
  );
};
export default Home;
