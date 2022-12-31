import React, { useState } from "react";
import "./AnimeList.css";
import { useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar";
import ListPagination from "../ListPagination";
import { Card } from "@mui/material";
import Modal from "../../Components/Modal/Modal";
import { useNavigate, useParams } from "react-router-dom";

const APILink = "https://api.jikan.moe/v4/characters";

function AnimeList() {
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [animeId, setAnimeId] = useState("");
  const [animeInfo, setAnimeInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const { uid } = useParams();

  const getAPIData = (page = 0) => {
    const url = `${APILink}?page=${page}&limit=15&q=${searchTerm}&order_by=favorites&sort=desc`;
    axios.get(url).then((res) => {
      setData(res.data);

      console.log(res.data, "Response");
    });
  };

  useEffect(() => {
    getAPIData();
  }, [searchTerm]);
  function onSearch(e) {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }

  // function openInfo(inf) {
  //   setIsOpen(true);
  //   setAnimeInfo(inf);
  //   console.log(inf, "info");
  //   console.log(animeInfo, "info2");
  // }

  const cardStyle2 = {
    backgroundColor: "rgb(242 254 255)",

    padding: "0.2rem",
    borderRadius: "7px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: "100%",
    height: "8rem",
    border: "1.5px solid rgba(140, 192, 222, 0.2)",
    mozBoxShadow: "0 0 7px rgb(149 191 205)",
    webkitBoxShadow: "0 0 7px rgb(149 191 205)",
    boxShadow: "rgb(186 198 202) 0px 0px 4px",
    marginBottom: "1rem",
  };
  return (
    <div>
      <SearchBar onInputChange={onSearch} />
      {/* <ul>{data.data && data.data.length > 0 && data.data.map((item) => <li key={item.mal_id}>{item.name}</li>)}</ul> */}
      <div>
        {/* <Modal isOpened={isOpen} onClose={() => setIsOpen(false)}>
          <div className="row">
            <div className="col-md-4">
              <img alt="avatar" style={{ width: "15rem" }} src={animeInfo.images.jpg.image_url} />
            </div>
            <div className="col-md-8">
              <p style={{ textAlign: "center", fontWeight: "600" }}>About</p>
              <div className="aboutDiv">
                <p style={{ fontSize: "13px" }}>{animeInfo.about}</p>
              </div>
            </div>
          </div>
        </Modal> */}
        {/* <h5 style={{ textAlign: "center", color: "white" }}>total results showing-{data.data.length}</h5> */}
        <div className="row result-row">
          {data.data &&
            data.data.length > 0 &&
            data.data.map((item) => (
              <div className="col-md-12" key={item.mal_id}>
                <Card variant="standard" style={cardStyle2}>
                  <table>
                    <tr>
                      <td>
                        <div className="anime-image">
                          <img src={item.images.jpg.image_url} />
                        </div>
                      </td>
                      <td width="85%">
                        <div className="anime-name">{item.name}</div>
                      </td>
                      {/* <td>
                        <p style={{ cursor: "pointer" }} onClick={() => openInfo(item)}>
                          hey
                        </p>
                      </td> */}
                    </tr>
                  </table>
                </Card>
              </div>
            ))}
        </div>
      </div>

      <ListPagination links={data.links} pagination={data.pagination} ongetAPIData={getAPIData} />
    </div>
  );
}

export default AnimeList;
