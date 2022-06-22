import { MdFacebook } from 'react-icons/md';
import { IoLogoInstagram } from 'react-icons/io';
import './styles.scss';

export function Footer(){
    return(
        <footer>
            <div className="link">
               https://breakingbadapi.com
            </div>


            <ul className="social">
                <li><MdFacebook /></li>
                <li><IoLogoInstagram /></li>
            </ul>
        </footer>
    )
    
}