import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import AppointmentDatePicker from '../pages/AppointmentDatePicker';
import AppointmentCreated from '../pages/AppointmentCreated';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return(
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38'}
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="AppointmentDatePicker" component={AppointmentDatePicker} />
      <App.Screen name="AppointmentCreated" component={AppointmentCreated} />
      
      <App.Screen name="Profile" component={Profile} />
    </App.Navigator>
  );
};

export default AppRoutes;
