import React, { FC } from "react";
import { useGameContext } from "../../Context/GameContext";
import Player from "../../helpers/Player";
import Button from "../Button";
import Heading from "../homeScreenComponents/Heading";
import Logo from "../Logo";
import Versus from "../Versus";


const GameOverScreen = () => {
    const { gameObj, setGameObj } = useGameContext();

    const audioSFx = new Audio('./audio/end.wav');
    audioSFx.play();

    const restartGame = () => {
        setGameObj({
            ...gameObj, screen: 1
        })
    }

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
                        <Versus colorPicked={gameObj.player.chosenColor} machineColor={gameObj.machine.chosenColor} playerScore={gameObj.player.totalPoints} machineScore={gameObj.machine.totalPoints} />
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
