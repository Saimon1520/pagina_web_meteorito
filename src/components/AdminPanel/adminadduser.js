import "./adminpln.css";
import SideNavBar from "./SideNavBar.js";
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { Navigate, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import Spinner from "../Spinner/Spinner.js";

const Adminroledit = () => {
    const [seldata, setSeldata] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            await getDocs(collection(db, "roles"))
                .then((querySnapshot) => {

                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    setSeldata(newData);
                });
        };
        fetchPost();
    }, []);

    const addUser = async (e) => {
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
                const docRef = await addDoc(collection(db, "users"), {
                    fname: fname, lname: lname, role: role, email: email, password: password
                });
                console.log("Usuario agregado con el id: ", docRef.id);
                alert('Usuario Agregado!');
                clearValues();
            } catch (e) {
                console.error("Error agregando al Usuario: ", e);
                alert('Error agregando al Usuario!');
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
                        {seldata === "" ? <Spinner /> :
                            <div className="mb-3">
                                <label htmlFor="InputRole" className="form-label">Rol</label>
                                <select id="INE" className="form-select" aria-label="select role" defaultValue={0} onChange={(e) => setRole(e.target.value)}>
                                    <option value="0">Selecciona un rol de la lista</option>
                                    {seldata.map((data) => (
                                        <option key={data.id} value={data.name}>{data.name}</option>
                                    ))}
                                </select>
                            </div>
                        }
                        <div className="mb-3">
                            <label htmlFor="InputRole" className="form-label">Correo</label>
                            <input id="INR" className="form-control" type="email" placeholder="ejemplo@ejemplo.com" aria-label="email input" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputPassword" className="form-label">Contraseña</label>
                            <input type="password" id="inputPassword6" className="form-control" aria-describedby="password input" onChange={(e) => setPassword(encryptData(e.target.value))}></input>
                        </div>
                        <button id="btnl" type="submit" onClick={addUser} className="btn btn-primary">Agregar</button>
                    </form>
                </div>
            </div>
        );
    }
};
export default Adminroledit;