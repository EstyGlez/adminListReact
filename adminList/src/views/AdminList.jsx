import React, { useState } from "react";
import "./adminList.css";
import { UserService } from "../../UserService";

const AdminList = () => {

  const [user, setUser] = useState({
    userName: "",
    surName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const [adminList, setAdminList] = useState([]);

  async function getData(){
    let users = await UserService.getAllUsers();
    setAdminList(users)
  }

  getData();


  function handleNameChange(e) {
    setUser({ ...user,[e.target.userName]:e.target.value });
  }

  function handleSurNameChange(e) {
    setUser({ ...user, [e.target.surName]:e.target.value });
  }

  function handlelastNameChange(e) {
    setUser({ ...user, [e.target.lastName]:e.target.value });
  }

  function handleEmailChange(e) {
    setUser({ ...user, [e.target.email]:e.target.value });
  }

  function handlePhoneNumberChange(e) {
    setUser({ ...user, [e.target.phoneNumber]:e.target.value });
  }

  function handleAddUserToList() {
    setAdminList((prevAdminList) => [...prevAdminList, user]);
    
    setUser({
      userName: "",
      surName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    });
  }

  console.log(AdminList);

  

  return (
    <>
      <label>
        <h1>Nombre:</h1>
        <input
          type="text"
          id="textUserName"
          name="userName"
          value={user.userName}
          onChange={handleNameChange}
        />
      </label>

      <label>
        <h2>Primer Apellido:</h2>
        <input
          type="text"
          id="texSurName"
          name="surName"
          value={user.surName}
          onChange={handleSurNameChange}
        />
      </label>

      <label>
        <h2>Segundo Apellido:</h2>
        <input
          type="text"
          id="textLastName"
          name="lastName"
          value={user.lastName}
          onChange={handlelastNameChange}
        />
      </label>

      <label>
        <h1>Correo Electrónico:</h1>
        <input
          type="text"
          id="textEmail"
          name="email"
          value={user.email}
          onChange={handleEmailChange}
        />
      </label>

      <label>
        <h2>Número de Teléfono:</h2>
        <input
          type="text"
          id="textPhoneNumer"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </label>

      <button onClick={handleAddUserToList}>Añadir usuario</button>

      {
        <ol>
        {admi.map((user, index) => (
          <li key={index}>
            {user.userName} {user.surName} {user.lastName} {user.email} {user.phoneNumber}
          </li>
        ))}
      </ol>

      }



    </>
  );
}



export default AdminList;
