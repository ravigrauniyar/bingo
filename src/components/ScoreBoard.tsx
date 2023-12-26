import { useEffect } from "react";
import { getScore } from "../actions/getScore";
import { useStore } from "../zustand/store";

export const ScoreBoard = (props: BoardProps) => {
  const store = useStore();
  const {
    userScore,
    aiScore,
    userSelectedCells,
    aiSelectedCells,
    setUserScore,
    setAiScore,
  } = store;

  useEffect(() => {
    setUserScore(getScore(userSelectedCells));
    setAiScore(getScore(aiSelectedCells));
  }, [aiSelectedCells, userSelectedCells, setAiScore, setUserScore]);

  const { isFor } = props;
  const score = isFor === "User" ? userScore : aiScore;

  return (
    <div className="flex w-full h-[50px] items-center justify-center">
      {score < 5 ? (
        <div className="flex text-2xl">
          <div>Score: </div>
          <div className="font-bold ml-1">{score}</div>
        </div>
      ) : (
        <div className="font-bold text-2xl">BINGO!</div>
      )}
    </div>
  );
};
