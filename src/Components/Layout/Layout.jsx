import React from "react";
import AnimeList from "../AnimeList";
import "./Layout.css";

function Layout() {
  return (
    <div className="content">
      <h2 className="main-heading">Search Anime Characters</h2>
      <div className="container">
        <AnimeList />
      </div>
    </div>
  );
}

export default Layout;
