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
  const [totalResults, setTotalresults] = useState("0");

  const getAPIData = (page = 0) => {
    const url = `${APILink}?page=${page}&limit=15&q=${searchTerm}&order_by=favorites&sort=desc`;
    axios.get(url).then((res) => {
      setData(res.data);
      setTotalresults(res.data.pagination.items.total);
      // console.log(res.data.pagination.items.total, "tot");

      // console.log(res.data, "Response");
      // console.log(totalResults, "res");
    });
  };

  useEffect(() => {
    getAPIData();
  }, [searchTerm]);
  function onSearch(e) {
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
  }

  function openInfo(link) {
    window.open(link);
  }

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
      {totalResults > 0 ? (
        <div>
          <h5 style={{ textAlign: "center", color: "white" }}>total results showing-{totalResults}</h5>
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
                        <td style={{ width: "100%", border: "2px solid #00434b8a" }}>
                          <div className="anime-name d-flex justify-content-between">
                            <div>{item.name}</div>
                            <div className="d-flex align-items-center">
                              <i class="las la-heart"></i>
                              {item.favorites}
                            </div>
                          </div>
                          <div style={{ padding: "0.4rem" }}>
                            {item.nicknames.map((nName, index) => (
                              <span
                                style={{
                                  marginRight: "0.5rem",
                                  backgroundColor: "#00ffff61",
                                  borderRadius: "4px",
                                  padding: "0.3rem",
                                  fontWeight: "600",
                                  fontSize: "14px",
                                }}
                              >
                                {nName}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td style={{ width: "100%", borderLeft: "2px solid #00434b8a" }}>
                          <div
                            className="d-flex justify-content-center float-right"
                            style={{ width: "3rems !important" }}
                          >
                            <i
                              style={{ cursor: "pointer" }}
                              className="las la-arrow-right"
                              onClick={() => openInfo(item.url)}
                            ></i>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="errorDiv">
          <h3 style={{ color: "white", fontWeight: "600", textAlign: "center" }}>No Records Found !</h3>
        </div>
      )}

      <ListPagination links={data.links} pagination={data.pagination} ongetAPIData={getAPIData} />
    </div>
  );
}

export default AnimeList;
