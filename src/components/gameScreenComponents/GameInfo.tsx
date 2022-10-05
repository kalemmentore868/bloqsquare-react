import React from "react";
import Logo from "../Logo";
import Score from "./Score";
import Timer from "./Timer";


const GameInfo = () => {
  return (
    <article>
      <header>
        <Logo />
      </header>

      <header className="container-fluid">
        <div className="dashboard row">
          <Timer />
          <Score />
        </div>
      </header>
    </article>
  );
};

export default GameInfo;
