import "./index.scss";
import { Card, CardContent, CardHeader } from "@mui/material";
const LearnNPlay = () => {
  return (
    <div id="learn" className="learnContainer">
      <div className="learnContent">
        <div className="learnHeader">
          <h1>Discover a new way to learn</h1>
          <p>Have fun with our interactive games to train your sign language skills!</p>
        </div>
        <div>
          <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardHeader title="Alphabet" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LearnNPlay;
