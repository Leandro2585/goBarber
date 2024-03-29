import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/Auth';
import Feather from 'react-native-vector-icons/Feather';
import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert
} from 'react-native';
import {
  Container,
  ForgotPassword,
  ForgotPasswordText,
  Title,
  CreateAccountButton,
  CreateAccountButtonText
} from './style';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .required('Senha obrigatória')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password
        });
      } catch (err) {

        if(err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        Alert.alert(
          'Erro na autenticação',
          'Erro ao fazer login, cheque suas credenciais'
        );
      }
  }, [signIn]);
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
            <Title>Faça seu login</Title>
          </View>

          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              placeholder="Senha"
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
              secureTextEntry
            />

            <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
          </Form>

          <ForgotPassword onPress={() => navigation.navigate('SignUp') }>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>

        </Container>
      </ScrollView>

    </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Feather name="log-in" size={20} color="#ff9000"/>
        <CreateAccountButtonText >Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
