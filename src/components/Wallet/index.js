import {Container, Row, Col} from 'react-bootstrap';

import { ContainerWallet } from './styles';

import WalletCell from '../../assets/img/walletAndCell.png';

const Wallet = () => (
  <ContainerWallet>
    <Container fluid>
      <Row className="align-items-center">
        <Col md={12} lg={6}>
          <h2>A sua carteira <br /> digital</h2>
          <p>
            Com a PredPay, você tem uma carteira digital que facilita a sua vida e
            ainda te dar cashback comprando em estabelecimentos parceiros e credenciados.
            Uma carteira digital totalmente diferente do que você já viu.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <div className="walletImg">
            <img src={WalletCell} alt="Imagem de um celular mostrando a carteira" />
          </div>
        </Col>
      </Row>
    </Container>
  </ContainerWallet>
);

export default Wallet;
