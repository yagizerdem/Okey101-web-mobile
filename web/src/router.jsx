import HomeLayout from "./layouts/HomeLayout.jsx";
import Gate from "./features/Gate.jsx";
import App from "./App.jsx";
import { createBrowserRouter, redirect } from "react-router-dom";
import { store } from "./store.js";
import SD from "./SD";
import GameLayout from "./layouts/GameLayout.jsx";
import ErrorLayout from "./layouts/ErrorLayout.jsx";
import Wait from "./components/Wait.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        loader: ()=>redirect('home'),
      },
      {
        path: "home",
        element: <HomeLayout />,
        children: [
          {
            index:true,
            loader:()=>redirect('gate')
          },
          {
            path: "gate",
            element: <Gate />,
          },
          {
            path: "search",
            element: <Wait />,
          },
        ],
      },
      {
        path: "/game",
        element: <GameLayout/>,
      }
    ],
    errorElement:<ErrorLayout></ErrorLayout> // global error boundry
  },
]);
export default router;
