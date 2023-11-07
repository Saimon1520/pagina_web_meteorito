import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; 2023 CODEIN</p>
                <ul>
                    <li><a href="https://www.facebook.com"><FaFacebook /></a></li>
                    <li><a href="https://cr.linkedin.com"><FaLinkedin /></a></li>   
                    <li><a href="https://www.instagram.com/codein_vr/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram /></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;