import _ from "lodash";

const getSameRowCellsCount = (cells: BoardCell[]): number => {
  const rows = Array.from({ length: 5 }, (_, i) => i + 1);

  let sameRowCellsCount: number = 0;

  _.map(rows, (row) => {
    const sameRowCells: BoardCell[] = [];
    _.map(cells, (cell) => {
      if (cell.row === row - 1) {
        sameRowCells.push(cell);
      }
    });

    if (sameRowCells.length === 5) {
      sameRowCellsCount = sameRowCellsCount + 1;
    }
  });

  return sameRowCellsCount;
};

const getSameColCellsCount = (cells: BoardCell[]): number => {
  const columns = Array.from({ length: 5 }, (_, i) => i + 1);
  let sameColCellsCount: number = 0;

  _.map(columns, (col) => {
    const sameColCells: BoardCell[] = [];
    _.map(cells, (cell) => {
      if (cell.column === col - 1) {
        sameColCells.push(cell);
      }
    });

    if (sameColCells.length === 5) {
      sameColCellsCount = sameColCellsCount + 1;
    }
  });

  return sameColCellsCount;
};

const getTopLeftToBottomRightDiagnolCount = (cells: BoardCell[]): number => {
  const diagnolCells: BoardCell[] = [];

  _.map(cells, (cell) => {
    if (cell.row === cell.column) {
      diagnolCells.push(cell);
    }
  });
  return diagnolCells.length === 5 ? 1 : 0;
};

const getBottomLeftToTopRightDiagnolCount = (cells: BoardCell[]): number => {
  const diagnolCells: BoardCell[] = [];

  _.map(cells, (cell) => {
    if (cell.row + cell.column === 4) {
      diagnolCells.push(cell);
    }
  });
  return diagnolCells.length === 5 ? 1 : 0;
};

export const getScore = (selectedCells: BoardCell[]) => {
  let score = 0;
  if (selectedCells.length > 0) {
    score =
      getSameRowCellsCount(selectedCells) +
      getSameColCellsCount(selectedCells) +
      getTopLeftToBottomRightDiagnolCount(selectedCells) +
      getBottomLeftToTopRightDiagnolCount(selectedCells);
  }
  return score;
};
