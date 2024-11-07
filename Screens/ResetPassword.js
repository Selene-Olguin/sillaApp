import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const ResetPassword = ({ navigation }) => {
    return (
        <View style={styles.container}>
                        <Image source={require('../assets/images/logo.png')} style={styles.logo1} />

            <Text style={styles.header}>Restablecer contraseña</Text>
            <TextInput placeholder="Introduce una nueva contraseña" secureTextEntry={true} style={styles.input} />
            <TextInput placeholder="Confirma contraseña" secureTextEntry={true} style={styles.input} />
            <Button title="Guardar" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    logo1:{
        width: 200,
        height: 200,
        marginBottom: 20,
        alignSelf: 'center',
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default ResetPassword;
