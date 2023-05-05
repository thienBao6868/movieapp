import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import { Divider, Stack, Typography } from "@mui/material";
import Genres from "./Genres";
import MovieByGenre from "./MovieByGenre";

const Category = () => {
  // step 1 tạo useState để chứa data category
  const [listCategory, setListCategory] = useState([]);
  // loadingCategory cover viec lay du lieu
  const [loadingCategory, setLoadingCategory] = useState();
  // getdata all movie theo theo thể loại
  const [movieByGenre, setMovieByGenre] = useState([]);
  // loadingMovieByGenre
  const [loadingMovieByGenre, setLoadingMovieByGenre] = useState();
  // cut 12 movie dau tien
  //const [cutListMovieByGenre, setCutListMovieByGenre] = useState([])
  const [genreId, setGenreId] = useState()
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingCategory(true);
        const res = await apiService.get(
          `genre/movie/list?api_key=${API_KEY}&language=en-US`
        );
        const result = res.data.genres;
        setListCategory(result);
        setLoadingCategory(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      let url = `discover/movie?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
      try {
        setLoadingMovieByGenre(true);
        const res = await apiService.get(
          `${url}&with_genres=${genreId}`
        );
        const result = res.data.results;
        setMovieByGenre(result);
        setLoadingMovieByGenre(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [genreId]);

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" my={3}>
          CATEGORY
        </Typography>
      </Stack>
      <Divider />
      <Stack flexDirection="row" width="100%" justifyContent="space-between">
        <Genres listCategory={listCategory} loadingCategory={loadingCategory} setGenreId={setGenreId} />
        <MovieByGenre
          movieByGenre={movieByGenre}
          loadingMovieByGenre={loadingMovieByGenre}
        />
      </Stack>
    </>
  );
};

export default Category;
// Render category bằng data vì vậy phải get data
// Render các phim bằng get data discovery theo genres

