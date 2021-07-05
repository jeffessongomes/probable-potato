import { useEffect, useState } from 'react';

import { Container, Row, Col } from "react-bootstrap";

import { Route, Switch, useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import ReactCodeInput from 'react-verification-code-input';

import { useFormik } from "formik";

import Cell from "../../assets/img/cell.png";
import confirmIcon from '../../assets/img/check.png';

import { Form, FormContainer, Verify, Confirm } from "./styles";

const FormComponent = () => {
  const [isTitle, setIsTitle] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/confirm' || location.pathname === "/verify") {
      setIsTitle(false)
    }else{
      setIsTitle(true);
    }
  }, [location.pathname]);

  const formik = useFormik({
    initialValues: {
      cpf: "",
      name: "",
      email: "",
      rg: "",
      telefone: "",

      endereco: "",
      cep: "",
      password: "",
      repeatPassword: "",
      cidadeAndState: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <FormContainer>
      <Container fluid>
        <Row>
          <Col lg={5} sm={12} className="mt-5">
            <div className="img__form--cell">
              <h4 className="d-block d-lg-none a_mimir">Quero ser PredPay</h4>

              <img
                src={Cell}
                alt="Celular com elementos"
                className="cell--Form"
              />

            </div>
          </Col>
          <Col lg={5} sm={12} className="mb-5">
            <Form className="mt-lg-5">
              {isTitle &&
                <h4 className="d-none d-lg-block ">Quero ser PredPay</h4>
              }
              <Switch>
                <Route exact path="/">
                  <div className="formContent">
                    <div className="input-data">
                      <input
                        type="text"
                        required
                        name="name"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      />
                      <label>Nome completo</label>
                    </div>
                    <div className="input-data">
                      <input
                        type="text"
                        required
                        name="rg"
                        id="rg"
                        value={formik.values.rg}
                        onChange={formik.handleChange}
                      />
                      <label>RG</label>
                    </div>
                    <div className="input-data">
                      <input
                        type="text"
                        required
                        name="cpf"
                        id="cpf"
                        value={formik.values.cpf}
                        onChange={formik.handleChange}
                      />
                      <label>CPF</label>
                    </div>{" "}
                    <div className="input-data">
                      <input
                        type="text"
                        required
                        name="telefone"
                        id="telefone"
                        value={formik.values.telefone}
                        onChange={formik.handleChange}
                      />
                      <label>Telefone</label>
                    </div>
                    <div className="input-data">
                      <input
                        type="text"
                        required
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                      <label>Email</label>
                    </div>
                  </div>
                  <Link to="/step2" className="btn--continue">
                    CONTINUAR
                  </Link>
                </Route>
                <Route exact path="/step2">
                  <div className="formContent">
                    <div className="input-data">
                      <input
                        type="text"
                        required
                        name="endereco"
                        id="endereco"
                        value={formik.values.endereco}
                        onChange={formik.handleChange}
                      />
                      <label>Endereço</label>
                    </div>
                    <div className="input-data">
                      <input
                        type="text"
                        required
                        name="cep"
                        id="cep"
                        value={formik.values.cep}
                        onChange={formik.handleChange}
                      />
                      <label>CEP</label>
                    </div>
                    <div className="input-data">
                      <input
                        type="text"
                        required
                        name="cidadeAndState"
                        id="cidadeAndState"
                        value={formik.values.cidadeAndState}
                        onChange={formik.handleChange}
                      />
                      <label>Cidade/Estado</label>
                    </div>{" "}
                    <div className="input-data">
                      <input
                        type="password"
                        required
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      <label>Senha</label>
                    </div>
                    <div className="input-data">
                      <input
                        type="password"
                        required
                        name="repeatPassword"
                        id="repeatPassword"
                        value={formik.values.repeatPassword}
                        onChange={formik.handleChange}
                      />
                      <label>Repetir senha</label>
                    </div>
                  </div>
                  <Link to="/verify" className="btn--continue">
                    CONTINUAR
                  </Link>
                </Route>
                <Route exact path="/verify">
                  <Verify>
                    <h2>Confirmação</h2>
                    <p>
                      Foi enviado para o e-mail email@email.com o código de verificação
                    </p>
                    <div className="w-100">
                      <span>Digite o código</span>
                    </div>
                    <div className="verify--input">
                      <ReactCodeInput fields={5} />
                    </div>
                    <Link to="/confirm" className="btn--continue">
                      FINALIZAR
                    </Link>
                  </Verify>
                </Route>
                <Route exact path="/confirm">
                  <Confirm>
                    <h2>Pronto!</h2>
                    <img src={confirmIcon} alt="Confirmado" />
                  </Confirm>
                </Route>
              </Switch>

              <p className="p-lorem">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </FormContainer>
  );
};

export default FormComponent;
