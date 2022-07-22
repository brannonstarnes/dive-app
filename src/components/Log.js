import React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Table, TableBody, TableRow } from "@mui/material";

function Log(props) {
  const mapEntries = props.diveLog.map((entry) => {
    return (
      <TableRow align="left" key={entry}>
        {entry}
      </TableRow>
    );
  });

  return (
    <Container
      id="dive-log-container"
      sx={{
        border: "1px solid green",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <h1> Diving Log </h1>
      </Box>
      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <h3>{props.D || "0"} fsw</h3>
          <h3>{props.BT || "0"} BT</h3>
          <div className="tableSchedRGD">
            <h2>
              T/S: {props.D}/{props.schedule}
              {props.formTSRGD}
            </h2>
          </div>
        </Box>
      </Container>
      <Box>
        <Table>
          <TableBody>{mapEntries || ""}</TableBody>
        </Table>
      </Box>
    </Container>
  );
}

Log.propTypes = {
  diveLog: PropTypes.array,
  D: PropTypes.number,
  schedule: PropTypes.number,
  formTSRGD: PropTypes.string,
  BT: PropTypes.number,
};

export default Log;
