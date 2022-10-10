import { useEffect, useState, useRef } from "react";
import { useAppSelector } from "../../../redux/redux-hooks";

const Score2 = () => {

    const player = useAppSelector((state) => state.player);

    return (
        <div className="center-align col s12">
            <div className="points yellow-text silom">
                <div>
                    <span id="points">{player.totalPoints}</span>pts.
                </div>
            </div>
        </div>
    );
};

export default Score2;
