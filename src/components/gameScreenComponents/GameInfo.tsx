import { FC } from "react"
import Logo from "../Logo";
import Score from "./Score";
import Timer from "./Timer";

interface gameInfo {
  scores: {
    playerScore: number;
    machineScore: number;
  }
}

const GameInfo: FC<gameInfo> = ({ scores }) => {

  return (
    <article>
      <header>
        <Logo />
      </header>

      <header className="container-fluid">
        <div className="dashboard row">
          <Timer scores={scores} />
          <Score />
        </div>
      </header>
    </article>
  );
};

export default GameInfo;
