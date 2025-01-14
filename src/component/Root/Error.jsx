import MainNaigation from "../MainNav/MainNavigation";
import classes from "./RootLayout.module.css";

export default function Error() {
  return (
    <>
      <MainNaigation />
      <main className={classes.content}>
        <h1>An error occured</h1>
        <p>Could not find this page</p>
      </main>
    </>
  );
}
