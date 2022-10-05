import React, { memo } from "react";
import { useGameContext } from "../../Context/GameContext";
import Countdown from "react-countdown";

interface countdownProps {
  minutes: number;
  seconds: number;
  milliseconds: number;
}

const Timer = () => {
  const timeSFx = new Audio("./audio/background-music.wav");
  const { gameProperties, setGameProperties } = useGameContext();

  const renderer = ({ minutes, seconds, milliseconds }: countdownProps) => {
    if (seconds % 4 == 0) timeSFx.play();
    return (
      <time>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}:
        {milliseconds < 100
          ? "0".concat(Math.round(milliseconds / 10).toString())
          : Math.round(milliseconds / 10)}
      </time>
    );
  };

  return (
    <div className="col s12">
      <div className="clock pink-text">
        {" "}
        <Countdown
          date={Date.now() + 25000}
          intervalDelay={0}
          precision={3}
          renderer={renderer}
          onComplete={() => setGameProperties({ ...gameProperties, screen: 3 })}
        />
      </div>
    </div>
  );
};

export default memo(Timer);
