import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo1} />
            <Text style={styles.header}>NUEVO REGISTRO</Text>
            <TextInput placeholder="Nombre" style={styles.input} />
            <TextInput placeholder="Apellido paterno" style={styles.input} />
            <TextInput placeholder="Apellido materno" style={styles.input} />
            <TextInput placeholder="Usuario" style={styles.input} />
            <TextInput placeholder="Contraseña" secureTextEntry={true} style={styles.input} />
            <TextInput placeholder="Confirmar contraseña" secureTextEntry={true} style={styles.input} />
            <Button  style={styles.button} title="Guardar" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },

    button:{
        width: 60,
        height: 40,
        borderColor: 'blue',
        borderWidth: 1,
        marginBottom: 20,
    },

    input: {
        width: '100%', 
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    logo1: {
        width: 200,
        height: 200,
        marginBottom: 20,
        alignSelf: 'center',
    },
});

export default Register;