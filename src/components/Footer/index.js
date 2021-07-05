import { Container, Row, Col } from "react-bootstrap";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { Foot } from "./styles";

import Logo from "../../assets/img/logoFooter.png";

const Footer = () => (
  <Foot>
    <Container>
      <Row>
        <Col xl={9} lg={8} md={9} sm={8} className="left--text">
          <img src={Logo} alt="Logo da PredPay" />
          <p>
            PredPay &copy; 2021. <br />
            Todos os direitos reservados. CNPJ: nº 00.000.000/0000-00
          </p>
        </Col>
        <Col lg={1} md={3} sm={2} className="logozinha">
          <ul>
            <li>
              <a
                href="https://www.google.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF size={24} color="#441F74" />
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={24} color="#441F74" />
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={24} color="#441F74" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Foot>
);

export default Footer;
