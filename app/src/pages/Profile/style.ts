import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  position: relative;
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 80 : 40 }px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab_500Medium';
  margin: 24px 0;
  text-align: left;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 0px;
`;

export const UserAvatar = styled.Image`
  background: rgba(0,0,0,0.2);
  width: 106px;
  height: 106px;
  border-radius: 98px;
  margin-top: 64px;
  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;
