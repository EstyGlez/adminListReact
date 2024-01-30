import "./navBar.css"
import logoImage from "./images/escudo.svg"


const Navbar = () => {

    function goBackAlert(){
        alert("Vuelva a la página de Inicio")
    }
   

    
    return (
      <nav className="navStyle">
        <img className="logoStyle" src={logoImage} alt="Logo de la empresa" />
        <h1 className="listStyle">LISTADO ESCOLAR</h1>
        <button className="backbutton" onClick={goBackAlert}>Ir Atrás</button>
      </nav>
    );
  };
  
  export default Navbar;