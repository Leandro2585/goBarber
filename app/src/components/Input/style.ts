import Feather from 'react-native-vector-icons/Feather';
import styled, { css } from 'styled-components/native';

interface InputContainerProps {
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.View<InputContainerProps>`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #232129;
    border-radius: 10px;
    margin-bottom: 16px;
    border-width: 2px;
    border-color: #232129;
    flex-direction: row;
    align-items: center;

    ${props => props.isErrored && css`
        border-color: #c53030;
    `}
    ${props => props.isFocused && css`
        border-color: #ff9000;
    `}
`;
export const TextInput = styled.TextInput`
    flex: 1;
    color: #fff;
    font-size: 16px;
    font-family: 'RobotoSlab_400Regular';
`;
export const Icon = styled(Feather)`
    margin-right: 16px;
`;