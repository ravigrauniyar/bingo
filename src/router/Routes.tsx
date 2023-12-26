import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { AiBoard } from "../pages/AiBoard";
import { GameBoards } from "../pages/GameBoards";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<GameBoards />} />
      <Route path="/ai" element={<AiBoard />} />
    </Route>
  )
);