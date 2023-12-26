import { useEffect } from "react";
import { Board } from "../components/Board";

export const AiBoard = () => {
  useEffect(() => {
    document.title = "Bingo | AI";
  }, []);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Board isFor={"AI"} />
    </div>
  );
};
