import { useEffect } from "react";
import { Board } from "../components/Board";
import { useStore } from "../zustand/store";

export const GameBoards = () => {
  useEffect(() => {
    document.title = "Bingo | AI";
  }, []);
  const store = useStore();
  const { isAiBoardVisible, toggleAiBoardVisibility } = store;

  const aiBoardTogglerText = isAiBoardVisible ? "Hide" : "View";
  const aiBoardVisibilityStyle = isAiBoardVisible ? "block" : "hidden";

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="flex">
        <Board isFor={"User"} />
        <div className={aiBoardVisibilityStyle}>
          <Board isFor={"AI"} />
        </div>
      </div>
      <div
        onClick={() => toggleAiBoardVisibility()}
        className="flex justify-center items-center px-3 my-4 cursor-pointer h-[50px] bg-gray rounded-md"
      >
        <p className="text-xl font-semibold">
          {`${aiBoardTogglerText} AI Board`}
        </p>
      </div>
    </div>
  );
};
