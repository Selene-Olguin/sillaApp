import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';

const Menu = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/images/logo.png')} style={styles.silla}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Image source={require('../assets/images/lupa2.png')} style={styles.searchIcon} />
                    <TextInput placeholder="Buscar" style={styles.searchInput} />
                </View>
                
                <View style={styles.menuContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                        <Text style={styles.menuItem}>Menú</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Ubicacion')}>
                        <Text style={styles.menuItem}>Ubicación</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('DatosPaciente')}>
                        <Text style={styles.menuItem}>Datos del paciente</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.header}>Objetivo</Text>
                <Text style={[styles.text, styles.justifiedText]}>
                    Automatizar una silla de ruedas para facilitar el desplazamiento independiente de
                    las personas con discapacidad motriz.
                </Text>

                <Text style={styles.header}>Misión</Text>
                <Text style={[styles.text, styles.justifiedText]}>
                 Ofrecer una mejor comodidad, calidad y tecnología para dar soluciones de movilidad a las
                 personas con discapacidad.Satisfaciendo a los pacientes con problemas.
                </Text>

                <Text style={styles.header}>Visión</Text>
                <Text style={[styles.text, styles.justifiedText]}>
                 Ser una empresa especializada en innovar sillas de ruedas implementando el uso de las nuevas     
                 tecnologías para Satisfacer las necesidades de los clientes. 
                </Text>

                <View style={styles.integrantesContainer}>
                    <Text style={styles.header}>Integrantes del Proyecto</Text>
                    <Text style={styles.text}>
                        Pedro Gerardo Hernández Chávez. {"\n"}
                        Selene Olguín Guerrero. {"\n"}
                        Gabriel Chávez Hernández. {"\n"}
                        Lázaro Mendoza Baldes.
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    silla: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
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
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F90101', 
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
    },
    integrantesContainer: {
        alignItems: 'center',
    },
    justifiedText: {
        textAlign: 'justify',
    },
});

export default Menu;