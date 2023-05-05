import { Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import apiService from "../api/apiService";
import { API_KEY } from "../api/config";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";

const MovieDetail = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [loadingGetMovieInfo, setLoadingGetMovieInfo] = useState();
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [loadingCast, setLoadingCast] = useState();

  //console.log(movieId)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingGetMovieInfo(true);
        const res = await apiService.get(
          `movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );
        const result = res.data;
        setMovieInfo(result);

        setLoadingGetMovieInfo(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [movieId]);
  // function get cast List
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingCast(true);
        const res = await apiService.get(
          `movie/${movieId}/casts?api_key=${API_KEY}&language=en-US`
        );
        const result = res.data.cast;
        setCastList(result);

        setLoadingCast(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <Stack
        //flexDirection="row"
        //justifyContent="space-between"
        //alignItems="center"
        mt={5}
      >
        <Typography variant="h5" my={3}>
          Movie Info
        </Typography>
      </Stack>
      <Divider />
      <Stack padding={2} />
      <MovieInfo
        movieInfo={movieInfo}
        loadingGetMovieInfo={loadingGetMovieInfo}
        castList={castList}
        loadingCast={loadingCast}
      />
    </>
  );
};

export default MovieDetail;
