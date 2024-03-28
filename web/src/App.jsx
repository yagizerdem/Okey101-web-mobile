import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/app.css";
import useRedirect from "./hooks/useRedirect";
export default function App() {
  useRedirect();
  return (
    <div className="app">
      <ToastContainer />
      <Outlet></Outlet>
    </div>
  );
}
