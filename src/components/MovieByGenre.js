import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

const MovieByGenre = ({ loadingMovieByGenre, movieByGenre }) => {
  const placeholder = [0, 1, 2, 3];
  const detailSkeleton = (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Stack>
  );
  return (
    <>
      <Grid container direction="row" spacing={2} mt={2}>
        {loadingMovieByGenre
          ? placeholder.map((item) => (
              <Grid item xs={10} sm={6} md={4} lg={3}>
                {detailSkeleton}
              </Grid>
            ))
          : movieByGenre.map((item) => (
              <Grid item xs={10} sm={6} md={4} lg={3}>
                <MovieCard key={item.id} item={item} />
              </Grid>
            ))}
      </Grid>
    </>
  );
};

export default MovieByGenre;
