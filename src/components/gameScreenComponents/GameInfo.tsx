import Logo from "../Logo";
import Score from "./Score";
import Timer from "./Timer";
import { Howl } from "howler";


const GameInfo = () => {
  const timeSFx = new Howl({
    src: ["./audio/background-music.wav"],
    html5: true,
    preload: true,
    loop: true,
    volume: 0.25
  });

  timeSFx.play()

  const stopBgMusic = () => {
    timeSFx.stop()
  }
  return (
    <article>
      <header>
        <Logo />
      </header>

      <header className="container-fluid">
        <div className="dashboard row">
          <Timer stopBgMusic={stopBgMusic} />
          <Score />
        </div>
      </header>
    </article>
  );
};

export default GameInfo;
