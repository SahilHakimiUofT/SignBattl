import "./index.scss";
import { Card, CardContent, CardHeader } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Router, useNavigate } from "react-router-dom";

const LearnNPlay = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `lesson`;
    navigate(path);
  };

  return (
    <div id="learn" className="learnContainer">
      <div className="learnContent">
        <div className="learnHeader">
          <h1>Discover a new way to learn</h1>
          <p>
            Have fun with our interactive games to train your sign language
            skills!
          </p>
        </div>
        <div className="cardList">
          <Card
            onClick={routeChange}
            className="zoom"
            sx={{
              transition: "all .1s ease-in-out",
              maxWidth: 275,
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.14)",
              color: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <CardMedia
              sx={{
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
              component="img"
              height="325"
              image="https://cdn.discordapp.com/attachments/1030241278874624103/1031031468635467896/Level_1.png"
              alt="green iguana"
            />
            <CardContent>
              <h2 className="cardTitle">Peaseant</h2>
              Intro ASL with alphabets
              <Typography variant="h11" color="text.secondary"></Typography>
            </CardContent>
          </Card>
          <Card
            className="zoom"
            sx={{
              transition: "all .1s ease-in-out",
              maxWidth: 275,
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.14)",
              color: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <CardMedia
              sx={{
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
              component="img"
              height="325"
              image="https://cdn.discordapp.com/attachments/1030241278874624103/1031031468987797544/Level_2.png"
              alt="green iguana"
            />
            <CardContent>
              <h2 className="cardTitle">Lord</h2>
              <Typography variant="h11">Coming Soon.....</Typography>
            </CardContent>
          </Card>
          <Card
            className="zoom"
            sx={{
              transition: "all .1s ease-in-out",
              maxWidth: 275,
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.14)",
              color: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <CardMedia
              sx={{
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
              component="img"
              height="325"
              image="https://cdn.discordapp.com/attachments/1030241278874624103/1031031469369458738/Level_3_.png"
              alt="green iguana"
            />
            <CardContent>
              <h2 className="cardTitle">Noblemen</h2>
              <Typography variant="h11">Coming Soon.....</Typography>
            </CardContent>
          </Card>
          <Card
            className="zoom"
            sx={{
              transition: "all .1s ease-in-out",
              maxWidth: 275,
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.14)",
              color: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <CardMedia
              sx={{
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
              component="img"
              height="325"
              image="https://cdn.discordapp.com/attachments/1031084740754808913/1031133129374703626/Level_4.jpg"
              alt="green iguana"
            />
            <CardContent>
              <h2 className="cardTitle">King</h2>
              <Typography variant="h11">
                Sign Language Pro: Coming Soon.....
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LearnNPlay;
