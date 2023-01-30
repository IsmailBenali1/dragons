import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 1ÈRE ÉTAPE
// Redux mise en place dans notre application
// importer provider et create store
import { createStore } from "redux";
import { Provider } from "react-redux"; // permet de contextualiser le store Redux dans React
import reducer from "./reducers/reducer";

// création du store => prêt pour l'App
const store = createStore(reducer);

// récupérer le store, le state avec son reducer, il nous permettra de contextualiser

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
