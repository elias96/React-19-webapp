import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

export default (initialState, el) => {
  const root = createRoot(el);
  root.render(<App {...initialState} />);
};
