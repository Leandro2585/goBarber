import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #232129;
    border-radius: 10px;
    margin-bottom: 16px;
    flex-direction: row;
    align-items: center;
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