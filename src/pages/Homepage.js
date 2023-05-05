
import React, { useEffect, useState } from "react";
import TrendingCardGroup from "../components/TrendingCardGroup";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import Grid from "@mui/material/Grid";
import Category from "../components/Category";
import { Stack } from "@mui/material";

const Homepage = () => {
  //get data gán vào listTrending để sử dụng render
  const [listTrending, setListTrending] = useState([]);
  // state loadingTrending thể hiện phần getdata, được set khi bắt đầu get, và kết thúc get
  const [loadingTrending, setLoadingTrending] = useState();
  // Vì chỉ muốn hiển thị 4 movie trending nên tạo state cutInitial để lấy 4 movie để rendering ban đầu
  const [cutInitial, setcutInitial] = useState();
  // function get data. 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingTrending(true);
        const res = await apiService.get(
          `/trending/all/day?api_key=${API_KEY}`
        );
        const result = res.data.results;
        setListTrending(result);
        setcutInitial([...result].splice(15, 5));
        setLoadingTrending(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Grid 
        container
        direction="column"
        justifyContent={{ md: "center", xs: "flex-end" }}
        sx={{
          minHeight: "100vh",
        }}
      >
        <Grid item direction="column" container>
          <Stack mt={3}/>
          <TrendingCardGroup
            listTrending={listTrending}
            cutInitial={cutInitial}
            loadingTrending={loadingTrending}
          />
        </Grid>

        <Grid item direction="column" mt={5} container>
          <Category/>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
/** render bằng gì? 
 * Bằng Mui, Atnd thì vào tham khảo và lấy ra render
 * Render bằng get data thì lấy data
 * - phải có state để nhận data trả về. 
 * - trong khi get phải có state để thể hiện việc get
 * - muốn chỉ render 4 movie, tạo state để gán 4 movie
*/

