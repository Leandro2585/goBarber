import React, { useCallback, useRef, useState } from 'react';
import logo from '../../assets/logo.svg';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Container, Content, Background, AnimationContainer } from './style';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from 'yup';
import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link } from 'react-router-dom';
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // Recuperação de senha

        api.post('/password/forgot', {
          email: data.email
        });
        
        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado',
          description: 'Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada'
        });

        // history.push('/dashboard');
      } catch (err) {
        if(err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description: 'Ocorreu um erro ao tentar realizar a recuperação de senha.'
        });
      } finally {
        setLoading(false);
      }
  }, [addToast]);
  return(
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber"/>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>
            <Input
              icon={FiMail}
              name="email"
              placeholder="E-mail"
              />
            
            <Button loading={loading} type="submit">Recuperar</Button>
          </Form>

          <Link to="/sign-in"><FiLogIn/>Voltar ao login</Link>
        </AnimationContainer>
      </Content>
      <Background/>
    </Container>
  );
}
export default ForgotPassword;
