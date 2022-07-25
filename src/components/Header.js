import React from "react";
import { CssBaseline } from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "7vh",
            width: "25vw",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h7">
            <h1> Diving App </h1>;
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Header;
