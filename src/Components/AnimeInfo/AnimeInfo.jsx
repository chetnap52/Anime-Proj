// import { useEffect, useState, useRef } from "react";
// import { Link, Navigate, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
// import "./UsersList.css";
// import Modal from "../../components/Modal/Modal";
// import axios from "axios";
// const APILink = "https://api.jikan.moe/v4/characters";

// function AnimeInfo() {
//   let currentUrl;
//   const [userProf, updateUserProf] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [newName, setNewName] = useState(userProf.name);
//   const navigate = useNavigate();

//   const { uid } = useParams();

//   useEffect(() => {
//     const url = APILink / uid;
//     axios.get(url).then((res) => {
//       updateUserProf(res.data);

//       console.log(res.data, "Response");
//     });
//   }, []);
//   return (
//     <>
//       <div>
//         {/* <button onClick={() => setIsOpen(true)}>Open</button> */}
//         <Modal isOpened={isOpen} onClose={() => setIsOpen(false)}>
//           <img alt="avatar" style={{ width: "25rem" }} src={userProf.avatar} />
//         </Modal>
//       </div>
//       <div className="row d-flex justify-content-center">
//         <div className="col-md-3">
//           <h3>{userProf.name}</h3>
//           <img onClick={() => setIsOpen(true)} src={userProf.avatar} alt="avatar" style={{ cursor: "pointer" }} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default AnimeInfo;
