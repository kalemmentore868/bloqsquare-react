import { createContext, useContext } from "react"
import Grid2 from "../helpers/Grid2";
import Player from "../helpers/Player";

interface GameObj {
    player: Player;
    machine: Player;
    screen: number;
}

export type GlobalContent = {
    gameObj: GameObj
    setGameObj: React.Dispatch<React.SetStateAction<{ player: Player; machine: Player; screen: number; }>>
}

export const GameContext = createContext<GlobalContent>({
    gameObj: {
        player: new Player("red"),
        machine: new Player("blue", true),
        screen: 1,

    },
    setGameObj: () => { }
})

export const useGameContext = () => useContext(GameContext)

