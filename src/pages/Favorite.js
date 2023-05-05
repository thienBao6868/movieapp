import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Favorite = () => {
  return (
    <>
      <Grid item direction="column" container>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" my={3}>
            Favorite
          </Typography>
        </Stack>
        <Divider />
      </Grid>
    </>
  );
};

export default Favorite;
