import React from 'react';
import logo from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import {
  Container,
  Content,
  Background
} from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
const SignIn: React.FC = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const email = useRef('');
  // const password = useRef('');
  // function handleSubmit(){
  //  console.log(email.current.value);
  //  console.log(password.current.value);
  // }
  return(
    <Container>
      <Content>
        <img src={logo} alt="GoBarber"/>
        <form>
          <h1>Faça seu logon</h1>
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
            <Button type="submit">Entrar</button>
            <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="login"><FiLogIn/>Criar conta</a>


      </Content>
      <Background/>
    </Container>
  );
}
export default SignIn;
