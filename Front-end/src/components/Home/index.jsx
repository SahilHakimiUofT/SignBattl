import Navbar from "../layouts/Navbar";
import "./index.scss";
const Home = () => {
  const navItems = [
    { to: "about", name: "About" },
    { to: "skills", name: "Skills" },
  ];
  return (
    <div className="container">
      <Navbar navItems={navItems} />
      <section id="about" className="about">
        <h1>About</h1>
      </section>
    </div>
  );
};
export default Home;
