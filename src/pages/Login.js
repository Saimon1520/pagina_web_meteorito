import './styles/Login.css'
import { useEffect, useState } from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../firebase'
import { Navigate, useNavigate } from "react-router-dom";
import CryptoJS from 'crypto-js';

const Login = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState(null);
    const [msgError, setMsgError] = useState("");
    const nav = useNavigate();
    let date = localStorage.getItem('Date');

    let verification = localStorage.getItem('loginVerification');
    console.log("Verification : ", verification)

    const encryptDate = () => {
        const date = new Date();
        const encryptedDate = CryptoJS.AES.encrypt(date.toLocaleDateString(), key).toString();
        localStorage.setItem('Date', encryptedDate)
    }



    const openHandler = (direction) => {
        localStorage.setItem('section', direction)
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        verification = localStorage.getItem('loginVerification')

    }, [msgError])


    const checkData = async () => {
        let userss = []


        try {

            if (users === null) {
                const q = query(collection(db, "users"));
                const querySnapshot = getDocs(q);
                (await querySnapshot).forEach((doc) => {
                    userss.push({ idUser: doc.id, userData: doc.data() })

                });
                setUsers(userss)
                let findIt = false
                let option = 1;
                userss.forEach(user => {
                    if ((user.userData.email === email) && (decryptData(user.userData.password) === password)) {
                        localStorage.setItem('loginVerification', CryptoJS.AES.encrypt("true", key).toString());
                        nav("/admin");
                        localStorage.setItem("isAdmin", "true");
                        //setMsgError("")
                        findIt = true
                        encryptDate();

                    }
                    else {
                        if (findIt === false) {
                            console.log(option)
                            //setMsgError("Datos ingresados incorrectos.")
                            if ((option === userss.length) && (findIt === false)) {
                                alert("Datos ingresados incorrectos.");
                            }
                            option = option + 1
                        }
                    }
                });
            }
            else {
                let findIt = false;
                let option = 1;
                users.forEach(user => {
                    if ((user.userData.email === email) && (decryptData(user.userData.password) === password)) {
                        localStorage.setItem('loginVerification', CryptoJS.AES.encrypt("true", key).toString());
                        nav("/admin");
                        localStorage.setItem("isAdmin", "true");
                        //setMsgError("")
                        findIt = true;
                        encryptDate();
                    }
                    else {
                        if (findIt === false) {
                            console.log(option)
                            //setMsgError("Datos ingresados incorrectos.")
                            if ((option === users.length) && (findIt === false)) {
                                alert("Datos ingresados incorrectos.");
                            }
                            option = option + 1
                        }

                    }
                });
            }

        } catch (error) {
            console.log("No se encontro el dato", error);
        }
        setPassword("");

    }

    const encryptData = (data) => {
        const encryptedData = CryptoJS.AES.encrypt(data, key).toString();
        return encryptedData
    }

    const decryptData = (data) => {
        const decryptedData = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
        return decryptedData
    }

    const changeData = (data) => {
        setPassword(data);
        //setMsgError("");
    }
    const key = "qwaser1221";

    const getVerification = () => {
        let data = "false";
        try {
            data = CryptoJS.AES.decrypt(localStorage.getItem('loginVerification'), key).toString(CryptoJS.enc.Utf8)
        } catch (error) {
            data = "false"
        }
        return data;

    }

    if (getVerification() === "true") {
        return <Navigate replace to="/admin" />;
    } else {

        return (
            <div>
                <div className='main_container'>
                    <div className='container'>
                        <div id="emailHelp" className="mt-1 msg_alert"><h2>Acceso restringido solo a personal autorizado.</h2></div>
                        <div className="mb-3 fi-cont">

                            <label className="form-label text-ti">Correo Electrónico</label>
                            <input type="email" className="form-control inputs" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-5">
                            <label className="form-label text-ti">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => changeData(e.target.value)} />
                            <div id="emailHelp" className=" msg_alert">{msgError}</div>
                        </div>
                        <button onClick={() => checkData()} className="btn btn-primary">Ingresar</button>
                    </div>
                </div>
            </div >
        )
    }
}

export default Login;