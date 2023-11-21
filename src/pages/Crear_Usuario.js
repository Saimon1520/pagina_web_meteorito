import { useState } from 'react';
import './styles/Crear_Usuario.css'

const Crear_Usuario = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            
        </div >
    )
}

export default Crear_Usuario;