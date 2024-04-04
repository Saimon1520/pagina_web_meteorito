import React from 'react';
import Modal from 'react-modal';
import logo from '../../../public/imgs/logo_sponsor.png'

import './TechStackModal.css'
const TechStackModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className='ReactModal__Content'>
            <div id='d1' className='divsModalTech'>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
            </div>
            <div id='d2' className='divsModalTech'>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
            </div>
            <div id='d1' className='divsModalTech'>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
            </div>
            <div id='d2' className='divsModalTech'>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
            </div>
            <div id='d1' className='divsModalTech'>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
                <div>
                    <img className="imgIcon" src={logo} />
                    <p className='sponsorname'>Sponsor</p>
                </div>
            </div>
            <button className='closingButton' onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default TechStackModal;