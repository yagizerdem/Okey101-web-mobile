import { Fragment } from "react";
import "../styles/homelayout.css";
import { Outlet, redirect } from "react-router-dom";
import { store } from "../store";
import SD from "../SD";

export default function HomeLayout() {
  return (
    <Fragment>
      <div className="home-layout">
        <div className="center">
          <h3>Okey 101</h3>
          <hr />
          <Outlet></Outlet>
        </div>
      </div>
    </Fragment>
  );
}
