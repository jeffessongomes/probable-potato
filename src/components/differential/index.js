
import { Container, Row, Col } from "react-bootstrap";

import { ContainerDifferential } from "./styles";

import code                    from "../../assets/img/qrcode.png";
import cashback                from "../../assets/img/cashback.png";
import convite                 from "../../assets/img/convite.png";
import app                     from "../../assets/img/app.png";
import photoDifferential       from "../../assets/img/foto-diferencial.png";
import photoDifferential_1368  from "../../assets/img/photo.png";
import photoDifferentialTablet from '../../assets/img/foto-diferencial-tablet.png';
import photoDifferentialMobile from '../../assets/img/foto-diferencial-mobile.png';

import Card from "../Card";

const Differential = () => (
  <ContainerDifferential>
    <Container fluid>
      <Row>
        <Col className="gambiarra" lg={6}>
          <h2>Diferencial</h2>
        </Col>
      </Row>
      <Row>
        <Col className="gambiarra order-2 order-lg-1" lg={5}>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Card
                icon={code}
                title="Qr Code"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Card
                icon={cashback}
                title="Cashback"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Card
                icon={app}
                title="Faça tudo pelo app"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Card
                icon={convite}
                title="Envie convites"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </Col>
          </Row>
        </Col>
        <Col lg={7} sm={12} className="pr-lg-0 pl-0 pr-0 order-1 order-lg-2 h-100">
          <img
            className="photoDifferentialOne"
            src={photoDifferential}
            alt="Foto de um jovem usando o predpay no celular"
          />
          <img
            className="photoDifferentialTwo d-none d-md-none d-lg-block"
            src={photoDifferential_1368}
            alt="Foto de um jovem usando o predpay no celular"
          />
          <img
            className="photoDifferential d-none d-md-block d-lg-none"
            src={photoDifferentialTablet}
            alt="Foto de um jovem usando o predpay no celular"
          />
          <img
            className="POURACHATADOBARALHO d-block d-md-none"
            src={photoDifferentialMobile}
            alt="Foto de um jovem usando o predpay no celular"
          />
        </Col>
      </Row>
    </Container>
  </ContainerDifferential>
);

export default Differential;
