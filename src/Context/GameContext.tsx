import { createContext, useContext } from "react"

interface GameProperties {
    playerColor: string;
    machineColor: string;
    screen: number;
}

export type GlobalContent = {
    gameProperties: GameProperties

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

