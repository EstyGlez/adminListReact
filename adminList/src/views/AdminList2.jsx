// import React, { useState, useEffect } from "react";
// import "./adminList.css";
// import { UserService } from "../../UserService";

// const AdminList = () => {
//   const [user, setUser] = useState({
//     userName: "",
//     surName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: ""
//   });

//   const [adminList, setAdminList] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         let users = await UserService.getAllUsers();
//         setAdminList(users);
//       } catch (error) {
//         console.error("Error al obtener usuarios:", error);
//       }
//     }

//     fetchData();
//   }, []); // El segundo argumento [] asegura que se ejecute solo al montar el componente

//   function handleNameChange(e) {
//     setUser({ ...user, userName: e.target.value });
//   }

//   function handleSurNameChange(e) {
//     setUser({ ...user, surName: e.target.value });
//   }

//   function handleLastNameChange(e) {
//     setUser({ ...user, lastName: e.target.value });
//   }

//   function handleEmailChange(e) {
//     setUser({ ...user, email: e.target.value });
//   }

//   function handlePhoneNumberChange(e) {
//     setUser({ ...user, phoneNumber: e.target.value });
//   }

//   function handleAddUserToList() {
//     setAdminList((prevAdminList) => [...prevAdminList, user]);

//     setUser({
//       userName: "",
//       surName: "",
//       lastName: "",
//       email: "",
//       phoneNumber: ""
//     });
//   }

//   return (
//     <>
//       <label>
//         <h1>Nombre:</h1>
//         <input
//           type="text"
//           id="textUserName"
//           name="userName"
//           value={user.userName}
//           onChange={handleNameChange}
//         />
//       </label>

//       <label>
//         <h2>Primer Apellido:</h2>
//         <input
//           type="text"
//           id="texSurName"
//           name="surName"
//           value={user.surName}
//           onChange={handleSurNameChange}
//         />
//       </label>

//       <label>
//         <h2>Segundo Apellido:</h2>
//         <input
//           type="text"
//           id="textLastName"
//           name="lastName"
//           value={user.lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>

//       <label>
//         <h1>Correo Electrónico:</h1>
//         <input
//           type="text"
//           id="textEmail"
//           name="email"
//           value={user.email}
//           onChange={handleEmailChange}
//         />
//       </label>

//       <label>
//         <h2>Número de Teléfono:</h2>
//         <input
//           type="text"
//           id="textPhoneNumber"
//           name="phoneNumber"
//           value={user.phoneNumber}
//           onChange={handlePhoneNumberChange}
//         />
//       </label>

//       <button onClick={handleAddUserToList}>Añadir usuario</button>

//       <ol>
//         {adminList.map((user, index) => (
//           <li key={index}>
//             {user.userName} {user.surName} {user.lastName} {user.email} {user.phoneNumber}
//           </li>
//         ))}
//       </ol>
//     </>
//   );
// }

// export default AdminList;
