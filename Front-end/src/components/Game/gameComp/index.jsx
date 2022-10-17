import { useState, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import * as fp from "fingerpose";
import "./index.scss";
import Handsigns from "../utils/handsigns";
import FlashMessage from "react-flash-message";
import { AiOutlineCheck } from "react-icons/ai";
const GameComp = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [camState, setCamState] = useState("on");
  const [gameOverState, setGameOverState] = useState(false);
  const [gameStartState, setGameStartState] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [timer, setTimer] = useState("0");
  const [score, setScore] = useState(0);
  const letterList = ["A", "B", "C", "D", "I", "K", "L", "R", "V", "Y"];
  const [currentLetter, setCurrentLetter] = useState(
    letterList[Math.floor(Math.random() * letterList.length)]
  );

  const timerRef = useRef(null);
  const gameStartRef = useRef(null);
  const letterRef = useRef(null);
  timerRef.current = timer;
  gameStartRef.current = gameStartState;
  letterRef.current = currentLetter;

  const generateRandomLetter = () => {
    return letterList[Math.floor(Math.random() * letterList.length)];
  };

  async function runHandpose() {
    const net = await handpose.load();
    setInterval(() => {
      detect(net);
    }, 100);
  }

  const resetCheckState = () => {
    setTimeout(() => {
      setShowCorrect(false);
    }, 1000);
  };
  async function detect(net) {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      // canvasRef.current.width = videoWidth;
      // canvasRef.current.height = videoHeight;
      if (gameStartRef.current && timerRef.current > 0) {
        const hand = await net.estimateHands(video);

        if (hand.length > 0) {
          const GE = new fp.GestureEstimator([
            Handsigns.aSign,
            Handsigns.bSign,
            Handsigns.cSign,
            Handsigns.dSign,
            Handsigns.iSign,
            Handsigns.kSign,
            Handsigns.lSign,
            Handsigns.rSign,
            Handsigns.vSign,
            Handsigns.ySign,
          ]);

          const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5);
          if (
            estimatedGestures.gestures !== undefined &&
            estimatedGestures.gestures.length > 0
          ) {
            const confidence = estimatedGestures.gestures.map((p) => p.score);
            const maxConfidence = confidence.indexOf(
              Math.max.apply(undefined, confidence)
            );

            if (
              estimatedGestures.gestures[maxConfidence].name ===
              letterRef.current
            ) {
              setCurrentLetter(generateRandomLetter());
              setScore((prevScore) => prevScore + 10);
              setShowCorrect(true);
              resetCheckState();
              return;
            }
          }
        }
      }
      // Make Detections
    }
  }

  //timer logic
  const Ref = useRef(null);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor(total / 1000);
    return {
      seconds,
      total,
    };
  };
  const startTimer = (e) => {
    let { total, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(seconds);
    }
  };
  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  };
  // useEffect(() => {
  //   clearTimer(getDeadTime());
  // }, []);
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  const startGame = () => {
    setGameStartState(true);
    clearTimer(getDeadTime());
    runHandpose();
  };

  return (
    <div>
      <div className="gameComp">
        <div className="webCamContainer">
          <Webcam ref={webcamRef} className="webcam" />
          <h2 className="letter gameText">Letter: {currentLetter}</h2>
          <h2 className="timer gameText">Timer: {timer}'s </h2>
          {showCorrect && (
            <FlashMessage duration={1000}>
              <AiOutlineCheck className="checkIcon" />
            </FlashMessage>
          )}
        </div>
        {!gameStartState && (
          <button className="startBtn" onClick={() => startGame()}>
            Ready
          </button>
        )}
        <h1>{"Current Score:" + score}</h1>
      </div>
    </div>
  );
};
export default GameComp;
