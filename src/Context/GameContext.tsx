import { createContext, useContext } from "react"
import Grid2 from "../helpers/Grid2";
import Player from "../helpers/Player";

interface GameProperties {
    playerColor: string;
    machineColor: string;
    screen: number;
}

export type GlobalContent = {
    gameProperties: GameProperties
    // setGameProperties: React.Dispatch<React.SetStateAction<{
    //     playerColor: string;
    //     machineColor: string;
    //     screen: number;
    // }>>
    setGameProperties: (c: GameProperties) => void
}

export const GameContext = createContext<GlobalContent>({
    gameProperties: {
        playerColor: "red",
        machineColor: "blue",
        screen: 1

    },
    setGameProperties: () => { }
})

export const useGameContext = () => useContext(GameContext)

