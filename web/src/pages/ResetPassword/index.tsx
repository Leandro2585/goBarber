import React, { useCallback, useRef } from 'react';
import logo from '../../assets/logo.svg';
import { FiLock } from 'react-icons/fi';
import { Container, Content, Background, AnimationContainer } from './style';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from 'yup';
import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api';

interface ResetPasswordFormData {
  new_password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const location = useLocation();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          new_password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('new_password'), undefined], 'Confirmação de senha incorreta')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { new_password, password_confirmation } = data;
        const token = location.search.replace('?token=', '');

        if(!token) {
          throw new Error();
        }

        await api.post('/password/reset', {
          new_password,
          password_confirmation,
          token
        });

        history.push('/login');
      } catch (err) {
        if(err instanceof Yup.ValidationError) {

          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro ao resetar senha',
          description: 'Ocorreu um erro ao resetar sua senha, tente novamente.'
        });
      }
  }, [addToast, history, location.search]);
  return(
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber"/>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>
            <Input
              icon={FiLock}
              name="new_password"
              type="password"
              placeholder="Nova Senha"
              />
            <Input
              icon={FiLock}
              name="password_confirmation"
              type="password"
              placeholder="Confirmação da Senha"
              />
              <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background/>
    </Container>
  );
}
export default ResetPassword;
