import "./adminpln.css";
import SideNavBar from "./SideNavBar.js";
import { useState, useEffect } from "react";
import { useHref, useLocation } from 'react-router-dom';
import { db } from '../../firebase';
import { updateDoc, doc, collection, getDocs } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const Adminuseredit = () => {
    const web = useLocation();
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

    const role = web.state.data;

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

    const editRole = async () => {
        if (rname === '' || checkIfRoleExists() === true) {
            alert('No se pueden dejar espacios en blanco o el Role ya existe!')
        }

        else {

            try {
                const docRef = doc(db, "roles", role.id);
                await updateDoc(docRef, {
                    name: rname
                });
                alert('Rol Editado!');
                clearValues();
                window.location.replace("/admin");
            } catch (e) {
                console.error("Error Editando Role: ", e);
                alert('Error Editando Role!');
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
                <h1 className="MTitle" >Editar Roles</h1>
                <div className="adminuseredit">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="InputfName" className="form-label">Nombre del Role</label>
                            <input id="IRN" className="form-control" type="fname" placeholder={role.name} aria-label="role name input" onChange={(e) => setRname(e.target.value)}></input>
                        </div>
                        <button id="btnl" type="button" onClick={() => { editRole() }} className="btn btn-primary">Editar</button>
                    </form>
                </div>
            </div>
        );
    }
};
export default Adminuseredit;