import React from 'react';
import { Image } from 'react-native'; 
import { Container, LoadingIcon } from './style';
import logoImg from '../../assets/logo.png';
const Splash: React.FC = () => {
    

    return (
        <Container>
            <Image source={logoImg}/>
            <LoadingIcon size="large" color="#f4ede8"/>
        </Container>
    );
}
export default Splash;