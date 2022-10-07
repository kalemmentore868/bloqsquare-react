import { FC } from "react"
import Logo from "../Logo";
import Score from "./Score";
import Timer from "./Timer";
import { Howl } from "howler";
import { useAppSelector } from "../../redux/redux-hooks";

interface gameInfo {
  scores: {
    playerScore: number;
    machineScore: number;
  }
}

const GameInfo: FC<gameInfo> = ({ scores }) => {

  // const { bgMusic } = useAppSelector(state => state.audio)

  // bgMusic.play()

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
