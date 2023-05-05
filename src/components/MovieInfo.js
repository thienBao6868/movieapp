import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CastList from "./CastList";

const MovieInfo = ({
  movieInfo,
  loadingGetMovieInfo,
  loadingCast,
  castList,
}) => {
  const detailSkeleton = (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Stack>
  );
  return (
    <>
      {loadingGetMovieInfo ? (
        detailSkeleton
      ) : movieInfo ? (
        <>
          <Grid display={"flex"} justifyContent={"flex-start"} flexWrap="wrap">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              marginRight={3}
              marginBottom={3}
              sx={[
                {
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieInfo.poster_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "380px",
                  width: "300px",
                },
              ]}
            />
            <Box flexBasis={"70%"} flexGrow={1} >
              <Typography variant="h4">
                {movieInfo.original_title
                  ? `${movieInfo.original_title}`
                  : `${movieInfo.original_name}`}
              </Typography>
              <Typography>Overview: {movieInfo.overview}</Typography>
              <Typography>
                Genres:
                {movieInfo.genres.map((item) => (
                  <Button>{item.name}</Button>
                ))}
              </Typography>
              <Typography>
                Company:
                {movieInfo.production_companies.map((item) => (
                  <Button>{item.name}</Button>
                ))}
              </Typography>
              <Typography>Release_date: {movieInfo.release_date}</Typography>
            </Box>
          </Grid>
        </>
      ) : (
        <Typography variant="h4" m={5}>
          Movie Detail Not Found!
        </Typography>
      )}
      {loadingCast ? (
        detailSkeleton
      ) : castList ? (
        <CastList CastList={castList} />
      ) : (
        <>
          <Typography>Cast List Not Found</Typography>
        </>
      )}
    </>
  );
};

export default MovieInfo;
