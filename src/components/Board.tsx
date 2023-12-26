import _ from "lodash";
import { BoardCell } from "./BoardCell";
import { useStore } from "../zustand/store";
import { ScoreBoard } from "./ScoreBoard";

enum BoardCellStyles {
  available = "text-white",
  selected = "text-black bg-white",
}
export const Board = (props: BoardProps) => {
  const { isFor } = props;
  const store = useStore();
  const {
    userScore,
    userBoard,
    aiBoard,
    userSelectedCells,
    aiSelectedCells,
    setUserSelectedCells,
    setAiSelectedCells,
  } = store;

  const board = isFor === "User" ? userBoard : aiBoard;
  const selectedCells = isFor === "User" ? userSelectedCells : aiSelectedCells;

  const selectCell = (boardCell: BoardCell) => {
    const userBoardCell = _.find(
      userBoard,
      (cell) => cell.value === boardCell.value
    );
    setUserSelectedCells(userBoardCell!);

    const aiBoardCell = _.find(
      aiBoard,
      (cell) => cell.value === boardCell.value
    );
    setAiSelectedCells(aiBoardCell!);
  };

  const handleSelectedCell = (boardCell: BoardCell) => {
    if (userScore < 5 && !_.isUndefined(boardCell)) {
      selectCell(boardCell);
      setTimeout(() => {
        const availableAiCells = _.difference(aiBoard, aiSelectedCells);
        const shuffledCells = _.shuffle(availableAiCells);
        selectCell(shuffledCells.pop()!);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl my-4">
        Player: <strong>{isFor}</strong>
      </div>

      <div className="flex flex-wrap w-[375px] mx-[20px]">
        {_.map(board, (boardCell) => {
          const { row, column, value } = boardCell;

          const boardCellStyles = !_.isUndefined(
            _.find(selectedCells, boardCell)
          )
            ? BoardCellStyles.selected
            : BoardCellStyles.available;

          const boardCellProps: BoardCellProps = {
            boardCellStyles: boardCellStyles,
            value: value,
          };

          return (
            <div
              className="flex justify-center items-center bg-black w-[75px] h-[75px] border border-white cursor-pointer"
              key={`${row}${column}`}
              onClick={() => handleSelectedCell(boardCell)}
            >
              <BoardCell {...boardCellProps} />
            </div>
          );
        })}
      </div>
      <ScoreBoard isFor={isFor} />
    </div>
  );
};
