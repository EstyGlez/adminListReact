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

    
//   }

  
//   return (
//     <section className="container">


//      <section className="Form">
//       <label>
//         <h3>Nombre:</h3>
//         <input className="imputStyle"
//           type="text"
//           id="textUserName"
//           name="userName"
//           value={user.userName}
//           onChange={handleNameChange}
//         />
//       </label>

//       <label>
//         <h3>Primer Apellido:</h3>
//         <input className="imputStyle"
//           type="text"
//           id="texSurName"
//           name="surName"
//           value={user.surName}
//           onChange={handleSurNameChange}
//         />
//       </label>

//       <label>
//         <h3>Segundo Apellido:</h3>
//         <input className="imputStyle"
//           type="text"
//           id="textLastName"
//           name="lastName"
//           value={user.lastName}
//           onChange={handlelastNameChange}
//         />
//       </label>

//       <label>
//         <h3>Correo Electrónico:</h3>
//         <input className="imputStyle"
//           type="text"
//           id="textEmail"
//           name="email"
//           value={user.email}
//           onChange={handleEmailChange}
//         />
//       </label>

//       <label>
//         <h3>Número de Teléfono:</h3>
//         <input className="imputStyle"
//           type="text"
//           id="textPhoneNumer"
//           name="phoneNumber"
//           value={user.phoneNumber}
//           onChange={handlePhoneNumberChange}
//         />
//       </label>

    
//       <button className="buttonForm" onClick={async () => { await handleAddUserToList(); showAlert(); }}>Añadir usuario</button>
      
//       </section>


//       <section className="listForm">       
//              <table>
//         <thead>
//           <tr>
//             <th className="title">Nombre</th>
//             <th className="title">Primer Apellido</th>
//             <th className="title">Segundo Apellido</th>
//             <th className="title">Correo Electrónico</th>
//             <th className="title">Número de Teléfono</th>
//           </tr>
//         </thead>
//         <tbody>
//           {adminList.map((user) => (
//             <tr key={user.id}>
//               <td className="dataUser">{user.userName}</td>
//               <td className="dataUser">{user.surName}</td>
//               <td className="dataUser">{user.lastName}</td>
//               <td className="dataUser">{user.email}</td>
//               <td className="dataUser">{user.phoneNumber}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </section>
      
 
//     </section>
//   );
// };

  

// export default AdminList;