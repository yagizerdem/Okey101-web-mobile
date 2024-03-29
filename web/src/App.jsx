import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/app.css";
import useRedirect from "./hooks/useRedirect";
import { useEffect } from "react";
import { socket } from "./socket";
import useSocket from "./services/useSocket";
export default function App() {
  useRedirect();
  useEffect(()=>{
    socket.connect()
  },[])
  useSocket()
  return (
    <div className="app">
      <ToastContainer />
      <Outlet></Outlet>
    </div>
  );
}
