import React, { FC } from "react";
import Logo from "./Logo";
import Score from "./Score";
import Timer from "./Timer";

interface gameInfoProps {
  score: number;
  gameOver: Function;
}

const GameInfo: FC<gameInfoProps> = ({ score, gameOver }) => {
  return (
    <article>
      <header>
        <Logo />
      </header>

      <header className="container-fluid">
        <div className="dashboard row">
          <Timer gameOver={gameOver} />
          <Score score={score} />
        </div>
      </header>
    </article>
  );
};

export default GameInfo;
