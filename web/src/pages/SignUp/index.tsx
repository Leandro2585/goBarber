import React from 'react';
import logo from '../../assets/logo.svg';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import {
  Container,
  Content,
  Background
} from './style';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {

  function handleSubmit(data: object): void {
    
  }

  return(
    <Container>
      <Background/>
      <Content>
        <img src={logo} alt="GoBarber"/>
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input
            icon={FiUser}
            name="name"
            placeholder="Nome"
            />
          <Input
            icon={FiMail}
            name="email"
            placeholder="E-mail"
            />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
            />
            <Button type="submit">Cadastrar</button>
        </Form>

        <a href="login">
          <FiArrowLeft/>
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
}
export default SignUp;
