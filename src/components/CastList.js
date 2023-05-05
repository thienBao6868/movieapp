import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CardActor from "./CardActor";

const CastList = ({ CastList }) => {
  return (
    <>
      <Stack
        //flexDirection="row"
        //justifyContent="space-between"
        //alignItems="center"
        mt={5}
      >
        <Typography variant="h5" my={3}>
          Cast List
        </Typography>
      </Stack>
      <Divider />
      <Stack padding={2} />
      <Grid
        container
        direction="row"
        spacing={2}
        mt={2}
        wrap="noWrap"
        width={"auto"}
        display={"flex"}
        overflow={"scroll"}
      >
        {CastList.map((item) => (
          <CardActor key={item.id} item={item} />
        ))}
      </Grid>
    </>
  );
};

export default CastList;
