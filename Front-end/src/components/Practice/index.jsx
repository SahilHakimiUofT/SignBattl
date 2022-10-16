import { useState, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import * as fp from "fingerpose";
import "./index.scss";
import Handsigns from "../../components/Game/utils/handsigns";
import FlashMessage from "react-flash-message";
import { AiOutlineCheck } from "react-icons/ai";

const GamePrac = (props) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [camState, setCamState] = useState("on");
  const [gameOverState, setGameOverState] = useState(false);
  const [gameStartState, setGameStartState] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const letterList = [
    "A",
    "B",
    "C",
    "D",
    "F",
    "G",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "R",
    "V",
    "Y",
  ];

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

      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          Handsigns.aSign,
          Handsigns.bSign,
          Handsigns.cSign,
          Handsigns.dSign,
          Handsigns.fSign,
          Handsigns.gSign,
          Handsigns.iSign,
          Handsigns.kSign,
          Handsigns.lSign,
          Handsigns.mSign,
          Handsigns.nSign,
          Handsigns.oSign,
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

          if (estimatedGestures.gestures[maxConfidence].name === props.letter) {
            setShowCorrect(true);
            resetCheckState();
            return;
          }
        }
      }

      // Make Detections
    }
  }

  //timer logic

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div>
      <div className="gameComp">
        <div className="webCamContainer">
          <Webcam ref={webcamRef} className="webcam" />
          <h2 className="letter gameText">Letter: {props.letter}</h2>
          {showCorrect && (
            <FlashMessage duration={1000}>
              <AiOutlineCheck className="checkIcon" />
            </FlashMessage>
          )}
        </div>
      </div>
    </div>
  );
};
export default GamePrac;
