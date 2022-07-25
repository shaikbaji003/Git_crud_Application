import { Button } from "@mui/material";
import React from "react";
import "./Button.css";

function Buttons() {
  return (
    <>
      <div className="btn">
        <Button variant="contained">Edit</Button>
        <Button variant="contained">More Details</Button>
        <Button variant="contained">Delete</Button>
      </div>
    </>
  );
}

export default Buttons;
