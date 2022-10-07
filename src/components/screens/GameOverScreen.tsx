import { setMachineScore } from "../../redux/machine";
import { setPlayerScore } from "../../redux/player";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { incrementScreen } from "../../redux/screen";
import Button from "../Button";
import Logo from "../Logo";
import Versus from "../Versus";


const GameOverScreen = () => {


    const player = useAppSelector((state) => state.player)
    const machine = useAppSelector((state) => state.machine)
    const { endAudio } = useAppSelector(state => state.audio)
    const dispatch = useAppDispatch()

    const restartGame = () => {
        endAudio.play()
        dispatch(incrementScreen())
        dispatch(setPlayerScore(0))
        dispatch(setMachineScore(0))
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
