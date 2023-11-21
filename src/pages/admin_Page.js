import { useState } from 'react';
import './styles/admin_Page.css'

const Admin_Page = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            
        </div >
    )
}

export default Admin_Page;