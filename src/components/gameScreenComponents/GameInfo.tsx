import React, { FC } from "react";
import Logo from "../Logo";
import Score from "./Score";
import Timer from "./Timer";
import Timer2 from "./Timer2";



const GameInfo = () => {
  return (
    <article>
      <header>
        <Logo />
      </header>

      <header className="container-fluid">
        <div className="dashboard row">
          <Timer />
          {/* <Timer2 /> */}
          {/* <Score /> */}
        </div>
      </header>
    </article>
  );
};

export default GameInfo;
