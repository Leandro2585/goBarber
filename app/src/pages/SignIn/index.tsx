import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  Container,
  ForgotPassword,
  ForgotPasswordText,
  Title,
  CreateAccountButton,
  CreateAccountButtonText
} from './style';

const SignIn: React.FC = () => {
  return (
    <>
    <KeyboardAvoidingView 
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView 
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image source={logoImg} />
          
          <View>
            <Title>Faça seu logon</Title>
          </View>

          <Input name="email" icon="email" placeholder="E-mail"/>
          <Input name="password" icon="pass" placeholder="Senha"/>

          <Button onPress={() => {
            return console.log('Clica aqui rapaz');
          }}>Entrar</Button>

          <ForgotPassword onPress={() => console.log('nada') }>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => {}}>
        <Feather name="login" size={20} color="#ff9000"/>
        <CreateAccountButtonText >Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;

