import React from "react";
import "./SearchBar.css";
import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
// import { SearchOutlinedIcon } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";
const cardStyle = {
  backgroundColor: "rgb(242 254 255)",
  marginBottom: "1rem",

  padding: "0.2rem",
  borderRadius: "30px",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  width: "51rem",
  height: "3rem",
  border: "1.5px solid rgba(140, 192, 222, 0.2)",
  mozBoxShadow: "0 0 7px rgb(149 191 205)",
  webkitBoxShadow: "0 0 7px rgb(149 191 205)",
  boxShadow: "rgb(186 198 202) 0px 0px 7px",
};

function SearchBar({ onInputChange }) {
  return (
    <div className="d-flex justify-content-center">
      <Card variant="standard" style={cardStyle}>
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
        <TextField
          id="search-bar"
          className="text"
          sx={{
            input: {
              border: "none",
              height: "1.4rem",
            },
            "::placeholder": { color: "white", fontSize: "18px" },
          }}
          style={{
            width: "92%",
            border: "none",
            marginBottom: "0.3rem",
            height: "1.2rem",
            borderColor: "transparent",
          }}
          onChange={(e) => onInputChange(e)}
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
      </Card>
    </div>
  );
}

export default SearchBar;
