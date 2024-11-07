import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';

const Ubicacion = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Text style={styles.menuItem}>Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Ubicacion')}>
                    <Text style={styles.menuItem}>Ubicacion</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DatosPaciente')}>
                    <Text style={styles.menuItem}>Datos del paciente</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.searchContainer}>
                <TextInput placeholder="Buscar" style={styles.searchInput} />
                <Button title="Buscar" style={styles.searchButton} />
            </View>
            <Image source={require('../assets/images/lupa.png')} style={styles.map} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        backgroundColor: '#00CEC9',
        paddingVertical: 10,
        borderRadius: 10,
    },
    menuItem: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'

    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    searchButton: {
        marginLeft: 10,
    },
    map: {
        width: '100%',
        height: '80%',
    },
});

export default Ubicacion;