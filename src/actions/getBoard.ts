import _ from "lodash";

export const getBoard = (): BoardCell[] => {
  const values = Array.from({ length: 25 }, (_, i) => i + 1);
  const board: BoardCell[] = [];

  const shuffledValues = _.shuffle(values);

  _.times(5, (row) => {
    _.times(5, (column) => {
      const randomValue = shuffledValues.pop();
      const cell: BoardCell = {
        row: row,
        column: column,
        value: randomValue!,
      };
      board.push(cell);
    });
  });
  return board;
};
