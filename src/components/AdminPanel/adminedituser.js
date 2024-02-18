import "./adminpln.css";
import { useGlobalContext } from '../../global.js';
import SideNavBar from "./SideNavBar.js";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { db } from '../../firebase';
import { updateDoc, doc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

const Adminuseredit = () => {
    const web = useLocation();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const user = web.state.user;

    const editUser = async (e) => {
        e.preventDefault();

        if (fname === '' || lname === '' || email === '' || password === '' || role === '') {
            alert('Favor verificar todos los espacios!')
        }

        else {

            try {
                const docRef = doc(db, "users", user.id);
                await updateDoc(docRef, {
                    fname: fname, lname: lname, role: role, email: email, password: password
                });
                alert('Usuario Editado!');
            } catch (e) {
                console.error("Error Editando Usuario: ", e);
                alert('Error Editando Usuario!');
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
                <h1 className="MTitle" >Editar Usuarios</h1>
                <div className="adminuseredit">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="InputfName" className="form-label">Nombre</label>
                            <input id="IFN" className="form-control" type="fname" placeholder={user.fname} aria-label="first name input" onChange={(e) => setFname(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputlName" className="form-label">Apellido</label>
                            <input id="ILN" className="form-control" type="lname" placeholder={user.lname} aria-label="last name input" onChange={(e) => setLname(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputEmail" className="form-label">Rol</label>
                            <input id="INE" className="form-control" type="role" placeholder={user.role} aria-label="role input" onChange={(e) => setRole(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputRole" className="form-label">Correo</label>
                            <input id="INR" className="form-control" type="email" placeholder={user.email} aria-label="email input" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputPassword" className="form-label">Contraseña</label>
                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="password input" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <button id="btnl" type="submit" onClick={editUser} className="btn btn-primary">Editar</button>
                    </form>
                </div>
            </div>
        );
    }
};
export default Adminuseredit;