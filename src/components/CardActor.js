import { Box, Stack } from "@mui/material";
import React from "react";

const CardActor = ({ item }) => {
  return (
    <>
      {!item.profile_path ? (
        <></>
      ) : (
        <Stack margin={1} key={item.id}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            sx={[
              {
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.profile_path})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "250px",
                width: "180px",
              },
            ]}
          />
        </Stack>
      )}
    </>
  );
};

export default CardActor;
