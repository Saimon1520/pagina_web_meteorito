import "./adminpln.css";
import { useGlobalContext } from '../../global.js';
import SideNavBar from "./SideNavBar.js";
import { useState } from "react";
import { useHref, useLocation } from 'react-router-dom';
import { db } from '../../firebase';
import { updateDoc, doc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

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

        if (fname === '' || lname === '' || email === '' || password === '' || role === '' || role === '0') {
            alert('Favor verificar todos los espacios!')
        }

        else {
            if (role === '1') {
                setRole("admin");
            }
            else if (role === '2') {
                setRole("user");
            }
            try {
                const docRef = doc(db, "users", user.id);
                await updateDoc(docRef, {
                    fname: fname, lname: lname, role: role, email: email, password: password
                });
                alert('Usuario Editado!');
                clearValues();
                window.location.replace("/admin/usertable");
            } catch (e) {
                console.error("Error Editando Usuario: ", e);
                alert('Error Editando Usuario!');
            }
        }
    }

    const encryptData = (data) => {
        const encryptedData = CryptoJS.AES.encrypt(data, "qwaser1221").toString();
        return encryptedData
    }

    const clearValues = () => {
        document.getElementById('IFN').value = '';
        document.getElementById('ILN').value = '';
        document.getElementById('INE').value = '0';
        document.getElementById('INR').value = '';
        document.getElementById('inputPassword6').value = '';
    }
    const getVerification = () => {
        try {
            return CryptoJS.AES.decrypt(localStorage.getItem('loginVerification'), "qwaser1221").toString(CryptoJS.enc.Utf8)
        } catch (error) {
            return "false"
        }
    }

    if (getVerification() !== "true") {
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
                            <label htmlFor="InputRole" className="form-label">Rol</label>
                            <select id ="INE" class="form-select" aria-label="select role" onChange={(e) => setRole(e.target.value)}>
                                <option value="0" selected>Selecciona un rol de la lista</option>
                                <option value="admin">Administrador</option>
                                <option value="user">Usuario</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputRole" className="form-label">Correo</label>
                            <input id="INR" className="form-control" type="email" placeholder={user.email} aria-label="email input" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputPassword" className="form-label">Contraseña</label>
                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="password input" onChange={(e) => setPassword(encryptData(e.target.value))}></input>
                        </div>
                        <button id="btnl" type="submit" onClick={editUser} className="btn btn-primary">Editar</button>
                    </form>
                </div>
            </div>
        );
    }
};
export default Adminuseredit;