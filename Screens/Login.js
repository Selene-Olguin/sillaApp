import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/usuario.png')} style={styles.ususa} />
            <TextInput style={styles.input} placeholder="Usuario" />
            <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />

            <Button title="Iniciar sesión" onPress={() => navigation.navigate('Menu')} style={styles.button} />
            <View style={styles.btn}>
                <Button title="Registrarse" onPress={() => navigation.navigate('Register')} />
                <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')} style={styles.boton}  >
                    <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    ususa: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    boton: {
        marginBottom: 40,
        marginTop: 20,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    btn: {
        marginTop: 15,
    },

    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default Login;
