import './style.css';
import { useState } from 'react';

const AddUsers = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(!isOpen)
    }



    return (
        <div>
            <div className="container-sm mainContainer">
                <h1 className='mb-5'>Agregar Usuarios</h1>
                <form className='inform'>
                    <div className="mb-3 mt-4">
                        <label for="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name"></input>
                    </div>
                    <div className="mb-3">
                        <label for="lastName" className="form-label">Apellidos</label>
                        <input type="text" className="form-control" id="lastName"></input>
                    </div>
                    <div className="mb-3">
                        <label for="idenNumber" className="form-label">Cedúla</label>
                        <input type="number" className="form-control" id="idenNumber"></input>
                    </div>
                    <label for="role" className="form-label">Rol</label>
                    <select class="form-select" aria-label="Default select example" id="role">
                        <option value="1" selected>Uno</option>
                        <option value="2">Dos</option>
                        <option value="3">Tres</option>
                    </select>
                    <button type="submit" className="btn btn-primary mt-5 mb-5">Agregar</button>
                </form>
            </div>
        </div>
    )
}

export default AddUsers;