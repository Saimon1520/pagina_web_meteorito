import "./adminpln.css";
import { useGlobalContext } from '../../global.js';
import SideNavBar from "./SideNavBar.js";
import { useLocation, NavLink } from 'react-router-dom';
import { db } from "../../firebase.js";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import Adminuseredit from "./adminedituser.js";

const Adminusertable = () => {
    const [users, setUsers] = useState([]);
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

    return (
        <div className="maindiv">
            <SideNavBar />
            <h1 className="MTitle" >Usuarios</h1>
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
                            {users.map((user) => (
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
};
export default Adminusertable;