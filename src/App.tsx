import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Routes";
import { useEffect } from "react";
import { getBoard } from "./actions/getBoard";
import { useStore } from "./zustand/store";

const App = () => {
  const store = useStore();
  const { setUserBoard, setAiBoard } = store;

  useEffect(() => {
    setUserBoard(getBoard());
    setAiBoard(getBoard());
  }, [setUserBoard, setAiBoard]);

  return <RouterProvider router={Router} />;
};

export default App;
