import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import './Barra_Obj.css';
import Obj_6 from '../OBJS/Obj_6';
import RM01 from '../OBJS/RM01';
import DAA01 from '../OBJS/DAA01'
import Obj from '../Obj/Obj';
const Barra_Obj = (props) => {
    return (
        <div className='Barra_Obj'>
            <div>
                <button className='buttonx'><FontAwesomeIcon icon={faChevronUp} size='xl'/></button>
            </div>
            <div className="obj-container">
                <Obj obj={Obj_6}></Obj>
                <Obj obj={RM01}></Obj>
                <Obj obj={DAA01}></Obj>
            </div>
            <div>
                <button className='buttonx'><FontAwesomeIcon icon={faChevronDown} size='xl' /></button>
            </div>
        </div>
    )
}

export default Barra_Obj;