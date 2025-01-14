import { Outlet } from "react-router-dom";
import MainNaigation from "../MainNav/MainNavigation";
import classes from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <>
      <MainNaigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
