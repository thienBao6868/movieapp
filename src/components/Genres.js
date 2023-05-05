import {
  Box,
  Divider,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Genres = ({ listCategory, loadingCategory,setGenreId}) => {
  // ListItemButon su dung openGenres
  const [openGenres, setOpenGenres] = useState(true);
  return (
    <>
      <Stack minWidth="150px" width={{ xs: "10%" }} marginRight={3}>
        {/* Genres-------- */}
        <Box>
          <ListItemButton
            alignItems="flex-start"
            onClick={() => setOpenGenres(!openGenres)}
            sx={{
              pr: 2,
              pt: 2.5,
              pb: openGenres ? 0 : 2.5,

              "&:hover, &:focus": {
                "& svg": { opacity: openGenres ? 1 : 0 },
              },
            }}
          >
            <ListItemText
              primary="Genres"
              primaryTypographyProps={{
                fontSize: 18,
                fontWeight: "medium",
                lineHeight: "20px",
                mb: "2px",
              }}
              secondary="Action, Drama, Thriller, Anime, Romantic, ..."
              secondaryTypographyProps={{
                noWrap: true,
                fontSize: 12,
                lineHeight: "16px",
                color: openGenres ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
              }}
              sx={{ my: 0 }}
            />
            <KeyboardArrowDownIcon
              sx={{
                mr: -1,
                opacity: 0,
                transform: openGenres ? "rotate(-180deg)" : "rotate(0)",
                transition: "0.2s",
              }}
            />
          </ListItemButton>
          {openGenres &&
            listCategory.map((item) => (
              <ListItemButton
                onClick={() => setGenreId(item.id)}
                key={item.id}
                sx={{
                  py: 0,
                  minHeight: 40,
                  color: "rgba(255,255,255,.8)",
                  "&:focus": {
                    backgroundColor: "rgba(225,0,0,0.1)",
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: "light",
                  }}
                />
              </ListItemButton>
            ))}
          <Divider sx={{ marginTop: 3 }} />
        </Box>
      </Stack>
    </>
  );
};

export default Genres;
