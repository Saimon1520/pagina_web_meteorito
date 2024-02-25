import "./adminpln.css";
import { useGlobalContext } from '../../global.js';
import SideNavBar from "./SideNavBar.js";
import { useLocation, NavLink } from 'react-router-dom';
import { db } from "../../firebase.js";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import Adminuseredit from "./adminedituser.js";
import { Navigate, useNavigate } from "react-router-dom";
import CryptoJS from 'crypto-js';

const Adminusertable = () => {
    const key = "qwaser1221";
    const [users, setUsers] = useState([]);
    const [Fusers, setFusers] = useState([]);
    const [searchInput, setSearchInput] = useState("")
    const [isSearching, setIsSearching] = useState(false);
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }
    const url = usePathname();

    useEffect(() => {
        const fetchPost = async () => {
            await getDocs(collection(db, "users"))
                .then((querySnapshot) => {

                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    setUsers(newData);
                    if (Fusers.length === 0) {
                        setFusers([...newData]);
                    }
                });
        };
        fetchPost();
    }, []);

    const delUser = async (user) => {
        try {
            await deleteDoc(doc(db, "users", user.id));
            alert('Usuario Eliminado!');
        } catch (error) {
            alert('Error durante la eliminacion!');
            console.log(error.message);
        }
        window.location.reload();
    }

    const handleChange = (e) => {
        setFusers(null);
        e.preventDefault();
        setSearchInput(e.target.value);

        if (searchInput.length > 1) {
            setIsSearching(true)
            const newList = [...users].filter((user) => user.fname.toLowerCase().includes(searchInput.toLowerCase()));
            setFusers([...newList])

        } else {
            setIsSearching(false);
            const copyData = [...users];
            setFusers(copyData);
        }
    };

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
                <h1 className="MTitle" >Usuarios</h1>
                <input className="nameFilter" id="nameFilter" type="text" placeholder="Buscá acá" onInput={handleChange} value={searchInput}></input>
                <div className="adminuseredit">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Correo</th>
                                    <th>Role</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Fusers.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <NavLink id="btnl" type="button" className="btn btn-primary" to="useredit" state={{ user: user }}>Editar</NavLink>
                                            <button onClick={() => { if (window.confirm('Seguro que desea eliminar al usuario: ' + user.fname + ' ' + user.lname)) delUser(user) }} id="btnr" type="button" className="btn btn-primary">Borrar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};
export default Adminusertable;