import React from 'react';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import {
  Container,
  Content,
  Background
} from './style';

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
          <input
            placeholder="E-mail"
            />
          <input
            placeholder="Senha"
            />
            <button type="submit">Entrar</button>
            <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="login"><FiLogIn/>Criar conta</a>


      </Content>
      <Background/>
    </Container>
  );
}
export default SignIn;
