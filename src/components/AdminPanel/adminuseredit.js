import "./adminpln.css";
import { useGlobalContext } from '../../global.js';
import SideNavBar from "./SideNavBar.js";
const Adminuseredit = () => {
    const { isAdmin, setAdmin } = useGlobalContext();
    setAdmin(true)
    return (
        <div className="maindiv">
            <SideNavBar />
            <h1 className="AZTitle" >Usuarios</h1>
        </div>
    );
};
export default Adminuseredit;