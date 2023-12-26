import { useEffect } from "react";
import { Board } from "../components/Board";

export const UserBoard = () => {

  useEffect(() => {
    document.title = "Bingo | User";
  }, []);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Board isFor={"User"} />
    </div>
  );
};
