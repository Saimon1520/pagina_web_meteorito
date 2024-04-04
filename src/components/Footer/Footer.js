import './Footer.css'
import logo from '../../../public/imgs/logo_sponsor.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import TechStackModal from '../TechStackModal/TechStackModal';
import { useState} from 'react';

const Footer = () => {

    const [isModalTechOpen, setIsModalTechOpen] = useState(false);

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div>
                    <p>&copy; 2023 CODEIN</p>
                </div>

                <div className='socialMediasContent'>
                    <ul className='socialMedias'>
                        <li><a href="https://www.facebook.com/profile.php?id=100092659160455&mibextid=ZbWKwL"><FaFacebook /></a></li>
                        {//<li><a href="https://cr.linkedin.com"><FaLinkedin /></a></li>
                        }
                        <li><a href="https://www.instagram.com/codein_vr/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram /></a></li>
                    </ul>
                </div>
                <TechStackModal isOpen={isModalTechOpen} onRequestClose={()=> setIsModalTechOpen(false)}></TechStackModal>

                <div className="sponsorContent">
                    <h2 className="sponsorTitle" onClick={() => setIsModalTechOpen(true)}>Sponsors</h2>
                    <div className="iconContent">
                        <div>
                            <img className="imgIcon" src={logo} />
                            <p>Sponsor</p>
                        </div>
                        <div>
                            <img className="imgIcon" src={logo} />
                            <p>Sponsor</p>
                        </div>
                        <div>
                            <img className="imgIcon" src={logo} />
                            <p>Sponsor</p>
                        </div>
                        <div>
                            <img className="imgIcon" src={logo} />
                            <p>Sponsor</p>
                        </div>
                        <div>
                            <img className="imgIcon" src={logo} />
                            <p>Sponsor</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;