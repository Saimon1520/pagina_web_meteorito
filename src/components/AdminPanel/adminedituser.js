import "./adminpln.css";
import SideNavBar from "./SideNavBar.js";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { db } from '../../firebase';
import { updateDoc, doc, getDocs, collection } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner.js";
import CryptoJS from "crypto-js";

const Adminuseredit = () => {
    const web = useLocation();
    const [users, setUsers] = useState("");
    const [seldata, setSeldata] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const user = web.state.data;

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

    useEffect(() => {
        const fetchPost = async () => {
            await getDocs(collection(db, "users"))
                .then((querySnapshot) => {

                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    setUsers(newData);
                });
        };
        fetchPost();
    }, []);

    const checkIfEmailExists = () => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                console.log('Email already exists');
                return true;
            }
        }
        console.log('Email does not exist');
        return false;
    }

    const editUser = async (e) => {
        e.preventDefault();

        if (fname === '' || lname === '' || email === '' || password === '' || role === '' || role === '0' || checkIfEmailExists() === true) {
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