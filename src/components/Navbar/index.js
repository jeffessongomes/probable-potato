import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

import {Nav} from './styles';

import Logo from '../../assets/img/logo.png';

const Navbar = () => (
  <Nav>
    <img src={Logo} alt="Logo da PredPay" />
    <ul>
      <li>
        <a href="https://www.google.com.br" target="_blank" rel="noreferrer">
          <FaFacebookF size={40} color="#FFFFFF" />
        </a>
      </li>
      <li>
        <a href="https://www.google.com.br" target="_blank" rel="noreferrer">
          <FaInstagram size={40} color="#FFFFFF" />
        </a>
      </li>
      <li>
        <a href="https://www.google.com.br" target="_blank" rel="noreferrer">
          <FaTwitter size={40} color="#FFFFFF" />
        </a>
      </li>
    </ul>
  </Nav>
)

export default Navbar;
