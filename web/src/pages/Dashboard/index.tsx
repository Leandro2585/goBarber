import React from 'react';
import { useAuth } from '../../hooks/AuthContext';
import { Container, Header, HeaderContent, Profile } from './style';
import { FiPower } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  return(
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber"/>

          <Profile>
            <img src={user.avatar_url} alt="username"/>
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower/>
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
}
export default Dashboard;
