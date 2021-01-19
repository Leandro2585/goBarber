import React, { useCallback, useEffect, useState } from 'react';
import { 
    Container, 
    Header, 
    HeaderTitle, 
    UserName, 
    ProfileButton, 
    UserAvatar,
    ProviderList,
    ProviderListTitle,
    ProviderContainer,
    ProviderAvatar,
    ProviderInfo,
    ProviderName,
    ProviderMeta,
    ProviderMetaText
} from './style';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../hooks/Auth';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export interface Provider {
    id: string;
    name: string;
    avatar_url: string;
}

const Dashboard: React.FC = () => {
    const [providers, setProviders] = useState<Provider[]>([]);

    const { user, signOut } = useAuth();
    const { navigate } = useNavigation();

    useEffect(() => {
        api.get('providers').then(response => {
            setProviders(response.data);
        });
    }, []);
    
    const navigateToProfile = useCallback(() => {
        navigate('Profile');
    }, [navigate]);

    const navigateToCreateAppointment = useCallback((providerId: string) => {
        navigate('CreateAppointment', { providerId });
    }, [navigate]);

    return(
        <Container>
            <Header>
                <HeaderTitle>
                    Bem vindo, {"\n"}
                    <UserName>{user.name}</UserName>
                </HeaderTitle>

                <ProfileButton onPress={navigateToProfile}>
                    <UserAvatar source={{ uri: user.avatar_url }}/>
                </ProfileButton>
            </Header>

            <ProviderList
                data={providers}
                keyExtractor={(provider) => provider.id}
                ListHeaderComponent={
                    <ProviderListTitle>Cabeleireiros</ProviderListTitle>
                }
                renderItem={({ item: provider }) => (
                    <ProviderContainer onPress={() => navigateToCreateAppointment(provider.id)}>
                        <ProviderAvatar source={{ uri: provider.avatar_url }}/>
                        <ProviderInfo>
                            <ProviderName>{provider.name}</ProviderName>
                            <ProviderMeta>
                                <Feather name="calendar" size={14} color="#ff9000"/>
                                <ProviderMetaText>Segunda á sexta</ProviderMetaText>
                            </ProviderMeta>
                            <ProviderMeta>
                                <Feather name="clock" size={14} color="#ff9000"/>
                                <ProviderMetaText>08h às 18h</ProviderMetaText>
                            </ProviderMeta>
                        </ProviderInfo>
                    </ProviderContainer>
                )}
            />
        </Container>
    );
}

export default Dashboard;