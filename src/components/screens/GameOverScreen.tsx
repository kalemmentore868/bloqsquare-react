import React, { FC } from "react";
import Player from "../../helpers/Player";
import Button from "../Button";
import Heading from "../Heading";
import Logo from "../Logo";
import Versus from "../Versus";

interface gameOverProps {
    player: Player;
    machine: Player;
    restartGame: Function;
}

const GameOverScreen: FC<gameOverProps> = ({
    player,
    machine,
    restartGame,
}) => {
	const audioSFx = new Audio('./audio/end.wav');
	audioSFx.play();
    return (
    	<section className="leaderboard">
            <article>
                <header>
                    <div className="row">
                        <div className="center-align col s12">
                            {" "}
                            <Logo />{" "}
                        </div>
                    </div>
                </header>
                <header className="container-fluid">
                    <h2 className="center-align heading silom">Game Over!</h2>
                </header>
            </article>
            <article>
                <div className="container-fluid">
                    <div className="row">
                        <Versus colorPicked={player.chosenColor} machineColor={machine.chosenColor} playerScore={player.totalPoints} machineScore={machine.totalPoints} />
                    </div>
                    <div className="row">
                        <div className="center-align col s12">
                            <span onClick={() => restartGame()}>
                                <Button text='Play Again' />
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default GameOverScreen;
