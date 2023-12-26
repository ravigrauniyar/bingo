import _ from "lodash";
import { create } from "zustand";

export const useStore = create<AppStates & AppActions>((set) => ({
  userBoard: [],
  aiBoard: [],
  userSelectedCells: [],
  aiSelectedCells: [],
  userScore: 0,
  aiScore: 0,
  isAiBoardVisible: false,

  setUserBoard: (newBoard: BoardCell[]) => set({ userBoard: newBoard }),
  setAiBoard: (newBoard: BoardCell[]) => set({ aiBoard: newBoard }),
  setUserSelectedCells: (boardCell: BoardCell) => {
    set((state) => {
      if (_.isUndefined(_.find(state.userSelectedCells, boardCell))) {
        const updatedCells = [...state.userSelectedCells, boardCell];
        return {
          userSelectedCells: updatedCells,
        };
      }
      return state;
    });
  },
  setAiSelectedCells: (boardCell: BoardCell) => {
    set((state) => {
      if (_.isUndefined(_.find(state.aiSelectedCells, boardCell))) {
        const updatedCells = [...state.aiSelectedCells, boardCell];
        return {
          aiSelectedCells: updatedCells,
        };
      }
      return state;
    });
  },
  setUserScore: (newScore: number) => set({ userScore: newScore }),
  setAiScore: (newScore: number) => set({ aiScore: newScore }),
  toggleAiBoardVisibility: () =>
    set((state) => ({ isAiBoardVisible: !state.isAiBoardVisible })),
}));
