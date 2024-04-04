import "./adminpln.css";
import { useLocation, NavLink } from 'react-router-dom';
import { db } from "../../firebase.js";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner.js";
import CryptoJS from 'crypto-js';

const dataTable = (table) => {
    const navigate = useNavigate();
    const key = "qwaser1221";
    const [data, setData] = useState([]);
    const [fdata, setFdata] = useState([]);
    const [searchInput, setSearchInput] = useState("")
    const [isSearching, setIsSearching] = useState(false);

    const handleClickEU = (data) => {
        navigate('/admin/usertable/useredit', { state: { data: data } });
    }

    const handleClickER = (data) => {
        navigate('/admin/roleedit', { state: { data: data } });
    }

    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }
    const url = usePathname();
    useEffect(() => {
        const fetchPost = async () => {
            await getDocs(collection(db, table.table))
                .then((querySnapshot) => {

                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    setData(newData);
                    if (fdata.length === 0) {
                        setFdata([...newData]);
                    }
                });
        };
        fetchPost();
    }, []);

    const delData = async (data) => {
        try {
            await deleteDoc(doc(db, table.table, data.id));
            alert('Eliminacion exitosa!');
        } catch (error) {
            alert('Error durante la eliminacion!');
            console.log(error.message);
        }
        window.location.reload();
    }

    const handleChange = (e) => {
        setFdata(null);
        e.preventDefault();
        setSearchInput(e.target.value);

        if (table.table === "users") {
            if (searchInput.length > 1) {
                setIsSearching(true)
                const newList = [...data].filter((data) => data.fname.toLowerCase().includes(searchInput.toLowerCase()));
                setFdata([...newList])

            } else {
                setIsSearching(false);
                const copyData = [...data];
                setFdata(copyData);
            }
        } else {
            if (searchInput.length > 1) {
                setIsSearching(true)
                const newList = [...data].filter((data) => data.name.toLowerCase().includes(searchInput.toLowerCase()));
                setFdata([...newList])

            } else {
                setIsSearching(false);
                const copyData = [...data];
                setFdata(copyData);
            }
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
                <input className="nameFilter" id="nameFilter" type="text" placeholder="Buscá acá" onInput={handleChange} value={searchInput}></input>
                <div className="adminuseredit">
                    {data ? (
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    {table.table === "users" ? <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Correo</th>
                                        <th>Role</th>
                                        <th>Acciones</th>
                                    </tr> :
                                        <tr>
                                            <th>Role</th>
                                            <th>Acciones</th>
                                        </tr>}
                                </thead>
                                <tbody>
                                    {table.table === "users" ? fdata.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.fname}</td>
                                            <td>{data.lname}</td>
                                            <td>{data.email}</td>
                                            <td>{data.role}</td>
                                            <td>
                                                <button id="btnl" type="button" className="btn btn-primary" onClick={() => { handleClickEU(data) }}>Editar</button>
                                                <button onClick={() => { if (window.confirm('Confirmar eliminacion de: ' + data.fname + ' ' + data.lname)) delData(data) }} id="btnr" type="button" className="btn btn-primary">Borrar</button>
                                            </td>
                                        </tr>
                                    )) : fdata.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>
                                                <button id="btnl" type="button" className="btn btn-primary" onClick={() => { handleClickER(data) }}>Editar</button>
                                                <button onClick={() => { if (window.confirm('Confirmar eliminacion de: ' + data.name)) delData(data) }} id="btnr" type="button" className="btn btn-primary">Borrar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <Spinner> </Spinner>
                    )}
                </div>
            </div>
        );
    }
};
export default dataTable;