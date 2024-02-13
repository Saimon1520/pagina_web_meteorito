import './styles/Login.css'
import { useState } from 'react';
import { collection, query, where, getDocs, addDoc, doc, deleteDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase'

const Login = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState(null);
    const [msgError, setMsgError] = useState("");

    const openHandler = (direction) => {
        localStorage.setItem('section', direction)
        setIsOpen(!isOpen)
    }

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
                userss.forEach(user => {
                    if ((user.userData.email === email) && (user.userData.password === password)) {
                        console.log("si funka")
                        setMsgError("")
                        findIt = true
                    }
                    else {
                        if (findIt === false) {
                            setMsgError("Datos ingresados incorrectos.")
                        }
                    }
                });
            }
            else {
                let findIt = false;
                users.forEach(user => {
                    if ((user.userData.email === email) && (user.userData.password === password)) {
                        console.log("si funka")
                        setMsgError("")
                        findIt = true;
                    }
                    else {
                        if (findIt === false) {
                            setMsgError("Datos ingresados incorrectos.")
                        }

                    }
                });
            }

        } catch (error) {
            console.log("No se encontro el dato", error);
        }
        setPassword("");
    }

    const changeData = (data) => {
        setPassword(data);
        setMsgError("");
    }


    return (
        <div>
            <div className='main_container'>
                <div className='container'>
                    <div id="emailHelp" className="mt-1 msg_alert">Acceso restringido solo a personal autorizado.</div>
                    <div className="mb-3 fi-cont">

                        <label className="form-label text-ti">Correo Electrónico</label>
                        <input type="email" className="form-control inputs" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <label className="form-label text-ti">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => changeData(e.target.value)} />
                        <div id="emailHelp" className=" msg_alert">{msgError}</div>
                    </div>
                    <button onClick={() => checkData()} className="btn btn-primary">Ingresar</button>
                </div>
            </div>
        </div >
    )
}

export default Login;