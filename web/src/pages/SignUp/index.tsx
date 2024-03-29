import React, { useCallback, useRef } from 'react';
import logo from '../../assets/logo.svg';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import {
  Container,
  Content,
  Background,
  AnimationContainer
} from './style';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useToast } from '../../hooks/ToastContext';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .min(6, 'No mínimo 6 caracteres')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post('users', data);
      console.log(response)
      history.push('/login');

      addToast({
        type: 'success',
        title: 'Cadastro realizado!',
        description: 'Vocễ já pode fazer o seu logon no GoBarber'
      })
    } catch (err) {
      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer cadastro, tente novamente.'
      });
    }
  }, [addToast, history]);

  return(
    <Container>
      <Background/>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber"/>
          <Form ref={formRef} onSubmit={handleSubmit}>
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
              <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/login">
            <FiArrowLeft/>
            Voltar para login
          </Link>
        </AnimationContainer>

      </Content>
    </Container>
  );
}
export default SignUp;
