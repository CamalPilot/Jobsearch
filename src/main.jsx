import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./Mode/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store";
import {Provider} from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
