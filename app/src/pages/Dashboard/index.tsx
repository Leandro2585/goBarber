import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {
    const { signOut } = useAuth();
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center'
        }}>
            <Text>Dashboard</Text>
            <Button title="sair" onPress={signOut}>Sair</Button>
        </View>
    );
}

export default Dashboard;