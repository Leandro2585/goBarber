import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
    width: auto;
    height: 60px;
    background: #ff9000;
    border-radius: 10px;
    margin-top: 8px;
    justify-content: center;
    align-items: center;
`;
export const ButtonText = styled.Text`
    font-family: 'RobotoSlab_500Medium';
    color: #312e38;
    font-size: 18px;
`;