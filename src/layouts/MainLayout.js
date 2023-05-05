import { Outlet, useSearchParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import SearchPage from "../pages/SearchPage";

function MainLayout() {
  let [params] = useSearchParams();
  let searchParam = params.get("q");

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <MainHeader />
      </Grid>
      <Grid item xs={10} mt={5}>
        {searchParam ? <SearchPage searchParam={searchParam}/> : <Outlet />}
      </Grid>
      <Grid item xs={12}>
        <MainFooter />
      </Grid>
    </Grid>
  );
}

export default MainLayout;
