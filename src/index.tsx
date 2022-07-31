import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from "./components/Router/history";
import { store } from "./store/store";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import theme from "./styles/mainTheme";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <App />
        </ThemeProvider>
      </Provider>
    </HistoryRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your store, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
