import ReactDOM from "react-dom/client";
import "./styles/index.css";
import {RouterProvider} from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import router from "./router.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
