import "./index.scss";
import { motion } from "framer-motion";
const Leaderboard = (props) => {
  const records = [
    { name: "Imran", score: 120 },
    { name: "Sahil", score: 100 },
    { name: "Doe", score: 90 },
    { name: "Jane", score: 80 },
    { name: "Bob", score: 70 },
  ];
  return (
    <div className="wrapper">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="leaderboardContainer"
      >
        <div className="leaderboardHeader">
          <h1>Leaderboard</h1>
        </div>
        {records.map((record, index) => (
          <div className="recordWrapper">
            <div className="record" key={index}>
              <h2>{record.name}</h2>
              <h2>{record.score}</h2>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default Leaderboard;
