import "./adminpln.css";
import SideNavBar from "./SideNavBar.js";
import { useState, useEffect, React } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase.js';
import { Navigate, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const Adminaddrole = () => {
    const [rname, setRname] = useState("");
    const [seldata, setSeldata] = useState("");

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

    const checkIfRoleExists = () => {
        for (let i = 0; i < seldata.length; i++) {
            if (seldata[i].name === rname) {
                console.log('Role already exists');
                return true;
            }
        }
        console.log('Role does not exist');
        return false;
    }

    const addRole = async () => {
        if (rname === '' || checkIfRoleExists() === true) {
            alert('No se pueden dejar espacios en blanco o el Role ya existe!')
        }

        else {

            try {
                const docRef = await addDoc(collection(db, "roles"), {
                    name: rname
                });
                console.log("Rol agregado con el id: ", docRef.id);
                alert('Rol Agregado!');
                clearValues();
            } catch (e) {
                console.error("Error agregando el Role: ", e);
                alert('Error agregando el Role!');
            }
        }

    }

    const clearValues = () => {
        document.getElementById('IRN').value = '';

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
                <h1 className="MTitle" >Agregar Roles</h1>
                <div className="adminuseredit">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="InputfName" className="form-label">Nombre del Role</label>
                            <input id="IRN" className="form-control" type="rname" placeholder="admin" aria-label="role name input" onChange={(e) => setRname(e.target.value)}></input>
                        </div>
                        <button id="btnl" type="button" onClick={() => { addRole() }} className="btn btn-primary">Agregar</button>
                    </form>
                </div>
            </div>
        );
    }
};
export default Adminaddrole;