import React, { useState } from "react";
import "./index.scss";
import { Card, CardContent, CardHeader } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Router, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { aslbet } from "./alphabet";
import GameComp from "../../Game/gameComp";
import GamePrac from "../../Practice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fill",
  bgcolor: "background.paper",
  border: "2px solid #000",

  p: 4,
  color: "black",
};

function Lesson() {
  const [renderGame, SetRenderGame] = useState(false);
  const changeRender = () => SetRenderGame(!renderGame);

  //for modal
  const [open, setOpen] = React.useState(false);

  const handleOpen = (letter) => {
    console.log("adasd");
    setOpen(letter);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="lessonsContainer">
        <text className="title">Alphabet</text>

        <div className="openGameBtn">
          {!renderGame && (
            <Button onClick={changeRender}>Test Your Knowledge</Button>
          )}
          {renderGame && <GameComp />}
        </div>

        <div className="signCards">
          {aslbet.map((item) => {
            return (
              <>
                <Modal
                  open={open === item.letter.toUpperCase()}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <GamePrac letter={item.letter.toUpperCase()} />
                  </Box>
                </Modal>
                <Card
                  onClick={() => {
                    handleOpen(item.letter.toUpperCase());
                  }}
                  className="zoom"
                  sx={{
                    transition: "all .1s ease-in-out",
                    maxWidth: 275,
                    height: 420,
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
                    image={item.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <h2 className="cardTitle">
                      {"The letter " + item.letter.toUpperCase()}
                    </h2>
                  </CardContent>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Lesson;
