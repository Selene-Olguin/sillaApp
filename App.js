import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Librerías de navegación
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar pantallas
import Login from './Screens/Login';
import Menu from './Screens/Menu';
import SlashScreen from './Screens/SlashScreen';
import Register from './Screens/Register';  
import ResetPassword from './Screens/ResetPassword';  
import Ubicacion from './Screens/Ubicacion';
import DatosPaciente from './Screens/DatosPaciente';

// Crear el árbol de navegación
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Slash'>
          <Stack.Screen name="Slash" component={SlashScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{ title: 'Login'}}/>
          <Stack.Screen name="Menu" component={Menu}/>
          <Stack.Screen name="Register" component={Register} options={{ title: 'Nuevo Registro'}}/>
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ title: 'Restablecer Contraseña'}}/>
          <Stack.Screen name="Ubicacion" component={Ubicacion} options={{ title: 'Ubicacion'}}/>
          <Stack.Screen name="DatosPaciente" component={DatosPaciente} options={{ title: 'Datos'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

// Exportar el componente
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

