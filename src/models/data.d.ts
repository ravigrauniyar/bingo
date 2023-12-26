declare type AppStates = {
  userBoard: BoardCell[];
  aiBoard: BoardCell[];
  userSelectedCells: BoardCell[];
  aiSelectedCells: BoardCell[];
  userScore: number;
  aiScore: number;
  isAiBoardVisible: boolean;
};

declare type AppActions = {
  setUserBoard: (board: BoardCell[]) => void;
  setAiBoard: (board: BoardCell[]) => void;
  setUserSelectedCells: (boardCell: BoardCell) => void;
  setAiSelectedCells: (boardCell: BoardCell) => void;
  setUserScore: (newScore: number) => void;
  setAiScore: (newScore: number) => void;
  toggleAiBoardVisibility: () => void;
};

declare type BoardProps = {
  isFor: string;
};

declare type BoardCell = {
  row: number;
  column: number;
  value: number;
};

declare type BoardCellProps = {
  boardCellStyles: string;
  value: number;
};
