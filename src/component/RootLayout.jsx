import { Outlet } from "react-router-dom";
import MainNaigation from "./MainNavigation";
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
