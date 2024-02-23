import "./adminpln.css";
import { useGlobalContext } from '../../global.js';
import SideNavBar from "./SideNavBar.js";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { Navigate, useNavigate } from "react-router-dom";

const Adminroledit = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");

    const addUser = async (e) => {
        e.preventDefault();

        if (fname === '' || lname === '' || email === '' || password === '' || role === '') {
            alert('Favor verificar todos los espacios!')
        }

        else {

            try {
                const docRef = await addDoc(collection(db, "users"), {
                    fname: fname, lname: lname, role: role, email: email, password: password
                });
                console.log("Usuario agregado con el id: ", docRef.id);
                alert('Usuario Agregado!');
            } catch (e) {
                console.error("Error agregando al Usuario: ", e);
                alert('Error agregando al Usuario!');
            }
        }
        document.getElementById('IFN').value = '';
        document.getElementById('ILN').value = '';
        document.getElementById('INE').value = '';
        document.getElementById('INR').value = '';
        document.getElementById('inputPassword6').value = '';
    }
    if (localStorage.getItem('loginVerification') !== "true") {
        return <Navigate replace to="/Login" />;
    } else {
        return (
            <div className="maindiv">
                <SideNavBar />
                <h1 className="MTitle" >Agregar Usuarios</h1>
                <div className="adminuseredit">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="InputfName" className="form-label">Nombre</label>
                            <input id="IFN" className="form-control" type="fname" placeholder="Juan" aria-label="first name input" onChange={(e) => setFname(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputlName" className="form-label">Apellido</label>
                            <input id="ILN" className="form-control" type="lname" placeholder="Perez" aria-label="last name input" onChange={(e) => setLname(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputEmail" className="form-label">Rol</label>
                            <input id="INE" className="form-control" type="role" placeholder="admin/user" aria-label="role input" onChange={(e) => setRole(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputRole" className="form-label">Correo</label>
                            <input id="INR" className="form-control" type="email" placeholder="ejemplo@ejemplo.com" aria-label="email input" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputPassword" className="form-label">Contraseña</label>
                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="password input" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <button id="btnl" type="submit" onClick={addUser} className="btn btn-primary">Agregar</button>
                    </form>
                </div>
            </div>
        );
    }
};
export default Adminroledit;