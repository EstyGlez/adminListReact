//VERSIÓN FINAL (EL PRIMER .MAP SOBRA, ES DE LA VERSIÓN ANTERIOR)


// import React, { useState, useEffect } from "react";
// import "./adminList.css";
// import { UserService } from "../../UserService.js"

// const AdminList = () => {

//   const [user, setUser] = useState({
//     userName: "",
//     surName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: ""
//   });

//   const [adminList, setAdminList] = useState([]);

//   async function getData(){
//     let users=await UserService.getAllUsers();
//     setAdminList(users);
//   }

//   getData()

//   function showAlert() {
//     alert("Datos enviados correctamente");
//   }

//   function handleNameChange(e) {
//     setUser({ ...user, userName:e.target.value });
//   }

//   function handleSurNameChange(e) {
//     setUser({ ...user, surName:e.target.value });
//   }

//   function handlelastNameChange(e) {
//     setUser({ ...user, lastName :e.target.value });
//   }

//   function handleEmailChange(e) {
//     setUser({ ...user, email:e.target.value });
//   }

//   function handlePhoneNumberChange(e) {
//     setUser({ ...user, phoneNumber:e.target.value });
//   }

//   async function handleAddUserToList() {
//     await UserService.submitUser(user);


//     setUser({
//       userName: "",
//       surName: "",
//       lastName: "",
//       email: "",
//       phoneNumber: ""
//     });

    
//     // showAlert()

  
    
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
//           onChange={handlelastNameChange}
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
//           id="textPhoneNumer"
//           name="phoneNumber"
//           value={user.phoneNumber}
//           onChange={handlePhoneNumberChange}
//         />
//       </label>

//       <button onClick={async () => { await handleAddUserToList(); showAlert(); }}>Añadir usuario</button>



             
//              <table>
//         <thead>
//           <tr>
//             <th>Nombre</th>
//             <th>Primer Apellido</th>
//             <th>Segundo Apellido</th>
//             <th>Correo Electrónico</th>
//             <th>Número de Teléfono</th>
//           </tr>
//         </thead>
//         <tbody>
//           {adminList.map((user) => (
//             <tr key={user.id}>
//               <td>{user.userName}</td>
//               <td>{user.surName}</td>
//               <td>{user.lastName}</td>
//               <td>{user.email}</td>
//               <td>{user.phoneNumber}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

  




// export default AdminList;