import React, { ChangeEvent, useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import {
  Container,
  Content,
  AvatarInput
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
import { useAuth } from '../../hooks/AuthContext';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  new_password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, updateUser } = useAuth();

  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(async (data: ProfileFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        old_password: Yup.string(),
        new_password: Yup.string().when('old_password', {
          is: val => !!val.length,
          then: Yup.string().required('Campo obrigatório'),
          otherwise: Yup.string()
        }),
        password_confirmation: Yup.string()
          .when('old_password', {
            is: val => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string()
          })
          .oneOf(
            [Yup.ref('new_password'), undefined],
            'Confirmação incorreta'
          )
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const {
        name,
        email,
        old_password, 
        new_password, 
        password_confirmation 
      } = data;

      const formData = {
        name,
        email, 
        ...(old_password 
          ? {
            old_password,
            new_password,
            password_confirmation
          } : {}),
      };

      const response = await api.put('/profile', formData);

      updateUser(response.data);

      history.push('/dashboard');

      addToast({
        type: 'success',
        title: 'Perfil atualizado!',
        description: 'Suas informações do perfil foram atualizadas com sucesso!'
      })
    } catch (err) {
      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }
      addToast({
        type: 'error',
        title: 'Erro no atualização',
        description: 'Ocorreu um erro ao atualizar o perfil, tente novamente.'
      });
    }
  }, [addToast, history]);

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      const data = new FormData();
      
      data.append('avatar', e.target.files[0]);
      
      api.patch('/users/avatar', data).then((response) => {
        updateUser(response.data);
        addToast({
          type: 'success',
          title: 'Avatar atualizado!'
        });
      });
    }
  }, [addToast, updateUser]);

  return(
    <Container>
      <header>
        <div>
          <Link to="/dashbaord">
            <FiArrowLeft/>
          </Link>
        </div>
      </header>
      <Content>
          <Form ref={formRef} initialData={{
            name: user.name,
            email: user.email
          }} onSubmit={handleSubmit}>
            <AvatarInput>
              <img src={user.avatar_url} alt={user.name}/>
              <label htmlFor="avatar">
                <FiCamera/>
                <input type="file" id="avatar" onChange={handleAvatarChange}/>
              </label>
            </AvatarInput>

            <h1>Meu perfil</h1>            

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
              containerStyle={{ marginTop: 24 }}
              icon={FiLock}
              name="old_password"
              type="password"
              placeholder="Senha atual"
              />
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
              placeholder="Confirmar Senha"
              />
            <Button type="submit">Confirmar mudanças</Button>
          </Form>

      </Content>
    </Container>
  );
}
export default Profile;
