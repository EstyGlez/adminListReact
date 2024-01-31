import React, { useState, useEffect } from "react";
import "./adminList.css";
import { useForm, FormProvider } from "react-hook-form";
import { UserService } from "../../UserService.js"

const AdminList = () => {

//  const [user, setUser] = useState({
//     userName: "",
//     surName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: ""
//  });

 const [adminList, setAdminList] = useState([]);
 const methods = useForm();

 async function getData(){
    let users=await UserService.getAllUsers();
    setAdminList(users);
 }

 useEffect(() => {
    getData();
   }, [adminList]);

 async function handleDeleteUser(userId) {
    await UserService.deleteUser(userId);
    let updatedUsers = adminList.filter(user => user.id !== userId);
    setAdminList(updatedUsers);
   }

 function showAlert() {
    alert("Datos enviados correctamente");
 }

 const onSubmit = methods.handleSubmit(data => {
 if (!data.userName || !data.surName || !data.lastName || !data.email || !data.phoneNumber) {
    alert("Por favor, complete todos los campos.");
    return;
 }

 // Lógica para agregar un nuevo usuario
 UserService.submitUser(data);
 methods.reset();
 setUser({
      userName: "",
      surName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    });
});

 return (
    <section className="container">

     <section className="Form">
      <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
      <label>
        <h3>Nombre:</h3>
        <input className="imputStyle"
          type="text"
          id="textUserName"
          name="userName"
          {...methods.register('userName', { required: true })}
        />
      </label>

      <label>
        <h3>Primer Apellido:</h3>
        <input className="imputStyle"
          type="text"
          id="texSurName"
          name="surName"
          {...methods.register('surName', { required: true })}
        />
      </label>

      <label>
        <h3>Segundo Apellido:</h3>
        <input className="imputStyle"
          type="text"
          id="textLastName"
          name="lastName"
          {...methods.register('lastName', { required: true })}
        />
      </label>

      <label>
        <h3>Correo Electrónico:</h3>
        <input className="imputStyle"
          type="text"
          id="textEmail"
          name="email"
          {...methods.register('email', { required: true })}
        />
      </label>

      <label>
        <h3>Número de Teléfono:</h3>
        <input className="imputStyle"
          type="text"
          id="textPhoneNumer"
          name="phoneNumber"
          {...methods.register('phoneNumber', { required: true })}
        />
      </label>

      <button className="buttonForm" type="submit">Añadir usuario</button>
      </form>
      </FormProvider>
      
      </section>


      <section className="listForm">       
      <table>
 <thead>
    <tr>
      <th className="title">Nombre</th>
      <th className="title">Primer Apellido</th>
      <th className="title">Segundo Apellido</th>
      <th className="title">Correo Electrónico</th>
      <th className="title">Número de Teléfono</th>
    </tr>
 </thead>
 <tbody>
    {adminList.map((user) => (
      <tr key={user.id}>
        <td className="dataUser">{user.userName}</td>
        <td className="dataUser">{user.surName}</td>
        <td className="dataUser">{user.lastName}</td>
        <td className="dataUser">{user.email}</td>
        <td className="dataUser">{user.phoneNumber}</td>
        <td><button onClick={() => handleDeleteUser(user.id)}>Eliminar</button></td>
      </tr>
    ))}
 </tbody>
</table>

</section>
</section>
 );
};

export default AdminList;