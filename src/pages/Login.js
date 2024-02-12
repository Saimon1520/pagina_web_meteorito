import './styles/Login.css'

const Login = () => {

    return (
        <div>
            <div className='main_container'>
                <form className='container'>
                    <div className="mb-3 fi-cont">
                        <label for="exampleInputEmail1" className="form-label text-ti">Correo Electrónico</label>
                        <input type="email" className="form-control inputs" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className=" msg_alert">Acceso restringido solo a personal autorizado.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label text-ti">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                    </div>
                    <button className="btn btn-primary">Ingresar</button>
                </form>
            </div>

        </div >
    )
}

export default Login;