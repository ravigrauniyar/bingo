export const BoardCell = (cellProps: BoardCellProps) => {
  const { boardCellStyles, value } = cellProps;
  return (
    <div
      className={`${boardCellStyles} flex justify-center items-center text-2xl font-semibold w-[50px] h-[50px] rounded-full`}
    >
      {value}
    </div>
  );
};
