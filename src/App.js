import React from "react";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import CreateModal from "./pages/create";
import "./styles.scss";
export default function App() {
  return (
    <Provider store={store}>
      <CreateModal />
    </Provider>
  );
}
