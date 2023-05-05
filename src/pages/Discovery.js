import {
  Divider,
  Grid,
  Pagination,
  PaginationItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../api/config";
import apiService from "../api/apiService";
import MovieCard from "../components/MovieCard";
import { Link, useParams } from "react-router-dom";

const Discovery = () => {
  const [listDiscovery, setListDiscovery] = useState([]);
  const [loadingDiscovery, setLoadingDiscovery] = useState();
  // sử dụng useParams để lấy ra pageID
  const { pageId } = useParams();
  // khi pageID thay đổi thì useEffect chạy lấy dữ liêuj list movie theo page
  useEffect(() => {
    const fetchData = async () => {
      let url = `discover/movie?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
      try {
        setLoadingDiscovery(true);
        const res = await apiService.get(`${url}&page=${pageId}`);
        const result = res.data.results;
        setListDiscovery(result);
        setLoadingDiscovery(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [pageId]);
  const placeholder = [0, 1, 2, 3];
  const detailSkeleton = (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Stack>
  );
  return (
    <>
      <Grid item direction="column" container>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" my={3}>
            DISCOVERY
          </Typography>
        </Stack>
        <Divider />
        <Grid container direction="row" spacing={2} mt={2}>
          {loadingDiscovery
            ? placeholder.map((item) => (
                <Grid item xs={6} sm={6} md={4} lg={3}>
                  {detailSkeleton}
                </Grid>
              ))
            : listDiscovery.map((item) => (
                <Grid item xs={6} sm={6} md={4} lg={3}>
                  <MovieCard key={item.id} item={item} />
                </Grid>
              ))}
        </Grid>
        <Divider />
        {/* components Pagition có các API, cout số lượng trang
        renderItem, render cá paginationItem, trong paginationItem có api, page, 
        trả ra vị trí page khi mình nhấp vào được lưu ở useParam.
        */}
        <Pagination
          size="large"
          count={10}
          sx={{ display: "flex", justifyContent: "center", margin: "2rem" }}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/discovery/${item.page}`}
              {...item}
            />
          )}
        />
      </Grid>
    </>
  );
};

export default Discovery;
