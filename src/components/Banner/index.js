import { Container, Row, Col } from 'react-bootstrap';

import { Banner } from './styles';

import Left from '../../assets/img/left.png';
import Right from '../../assets/img/right.png';


const BannerComponent = () => (
  <Banner>
    <Container fluid>
      <Row>
        <Col lg={9}>
          <p>
            Uma carteira digital diferente de tudo o que você já viu!
          </p>
        </Col>
        <img className="icon-left" src={Left} alt="Figura" />
        <Col lg={12}>
          <img className="icon-right" src={Right} alt="Figura" />
        </Col>
      </Row>
    </Container>
  </Banner>
)

export default BannerComponent;
