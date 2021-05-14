import React, { useRef, useCallback, useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert
} from 'react-native';
import {
  Container,
  Title,
  UserAvatarButton,
  UserAvatar,
  BackButton
} from './style';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/Auth';
import api from '../../services/api';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  new_password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();

  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);
  const oldPasswordInputRef = useRef<TextInput>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const handleUpdateProfile = useCallback(async (data: ProfileFormData) => {
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

      Alert.alert('Perfil atualizado com sucesso!');

      navigation.goBack();

    } catch (err) {
      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }

      Alert.alert(
        'Erro na atualização do perfil',
        'Ocorreu um erro ao atualizar seu perfil, tente novamente'
      );
    }
  }, [navigation, updateUser]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const handleUpdateAvatar = useCallback(async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const data = new FormData()
      data.append('avatar', {
        type: 'image/jpeg',
        name: `${user.id}.jpeg`,
        uri: result.uri
      })
      api.patch('/users/avatar', data).then(response => {
        updateUser(response.data);
      });
    }
  }, [user.id, updateUser]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

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
          <BackButton onPress={handleGoBack}>
            <Feather name="chevron-left" size={24} color="#999591"/>
          </BackButton>
          <UserAvatarButton onPress={handleUpdateAvatar}>
            <UserAvatar source={{ uri: user.avatar_url }}/>
          </UserAvatarButton>
          <View>
            <Title>Meu perfil</Title>
          </View>

          <Form
            ref={formRef}
            initialData={{user}}
            onSubmit={handleUpdateProfile}>

            <Input
              autoCapitalize="words"
              name="name"
              icon="user"
              placeholder="Nome"
              value={user.name}
              returnKeyType="next"
              onSubmitEditing={() => {
                emailInputRef.current?.focus()
              }}
            />
            <Input
              ref={emailInputRef}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={user.email}
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => {
                oldPasswordInputRef.current?.focus()
              }}
            />

            <Input
              ref={oldPasswordInputRef}
              secureTextEntry
              name="old_password"
              icon="lock"
              placeholder="Senha atual"
              containerStyle={{ marginTop: 16 }}
              textContentType="newPassword"
              returnKeyType="next"
              onSubmitEditing={() => {
                newPasswordInputRef.current?.focus();
              }}
            />

            <Input
              ref={newPasswordInputRef}
              secureTextEntry
              name="new_password"
              icon="lock"
              placeholder="Nova senha"
              textContentType="newPassword"
              returnKeyType="next"
              onSubmitEditing={() => {
                confirmPasswordInputRef.current?.focus()
              }}
            />

            <Input
              ref={confirmPasswordInputRef}
              secureTextEntry
              name="password_confirmation"
              icon="lock"
              placeholder="Confirmar senha"
              textContentType="newPassword"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <Button
              onPress={() => formRef.current?.submitForm()}>
              Confirmar alterações
            </Button>
          </Form>

        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
