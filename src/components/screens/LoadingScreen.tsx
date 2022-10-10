import React, { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Logo from "../Logo";
import { useAppDispatch } from "../../redux/redux-hooks";
import { incrementScreen } from "../../redux/screen";
import { LevelData, setGameData } from "../../redux/gameData";

interface ApiData {
  response: {
    data: LevelData[];
  };
}

const LoadingScreen = () => {
  let [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const media = [
      "./audio/background-music.wav",
      "./audio/end.wav",
      "./audio/opponent.wav",
      "./audio/toggle-reverse.wav",
      "./audio/toggle.wav",
      "./audio/you.wav",
    ];

    const response = fetchGameData()
    cacheMedia(media);

  }, []);


  const cacheMedia = async (media: string[]) => {
    const promises = await media.map((src) => {
      return new Promise<void>(function (resolve, reject) {
        const audio = new Audio();
        audio.src = src;
        // @ts-ignore
        audio.onload = resolve();
        // @ts-ignore
        audio.onerror = reject();
      });
    });

    await Promise.all(promises);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  const fetchGameData = async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/7510f3ce-0209-4180-9c3f-cf42bdc82db6"
    );
    const data: ApiData = await response.json();
    dispatch(setGameData(data.response.data))
  }

  return (
    <section className="loading-screen">
      <article>
        {loading ? (
          <div className="container">
            {" "}
            <ClimbingBoxLoader
              color="#d500f9"
              loading={loading}
              size={25}
              aria-label="Loading Spinner"
            />
          </div>
        ) : (
          <div className="container">
            <header>
              <Logo />
            </header>

            <button
              onClick={() => dispatch(incrementScreen())}
              className="btn-larger  pink"
            >
              start
            </button>
          </div>
        )}
      </article>
    </section>
  );
};

export default LoadingScreen;
