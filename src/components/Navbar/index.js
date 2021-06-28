import {Container, Row, Col} from 'react-bootstrap';

import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

import {Nav} from './styles';

import Logo from '../../assets/img/logo.png';

const Navbar = () => (
  <Container fluid>
    <Row>
      <Col lg={12}>
        <Nav>
          <img src={Logo} alt="Logo da PredPay" />
          <ul>
            <li>
              <a href="https://www.google.com.br" target="_blank" rel="noreferrer">
                <FaFacebookF size={24} color="#FFFFFF" />
              </a>
            </li>
            <li>
              <a href="https://www.google.com.br" target="_blank" rel="noreferrer">
                <FaInstagram size={24} color="#FFFFFF" />
              </a>
            </li>
            <li>
              <a href="https://www.google.com.br" target="_blank" rel="noreferrer">
                <FaTwitter size={24} color="#FFFFFF" />
              </a>
            </li>
          </ul>
        </Nav>
      </Col>
    </Row>
  </Container>
)

export default Navbar;
