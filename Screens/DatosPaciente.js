import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DatosPaciente = ({ navigation }) => {
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
            
            <Text style={styles.header}>Datos obtenidos por el paciente</Text>
            <Image source={require('../assets/images/lupa.png')} style={styles.graph} />
            <Text style={styles.subHeader}>Datos las últimas semanas</Text>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableHeader}>SEMANAS</Text>
                    <Text style={styles.tableHeader}>PULSO</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>1</Text>
                    <Text style={styles.tableCell}>76 - 88</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>2</Text>
                    <Text style={styles.tableCell}>86 o más</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>3</Text>
                    <Text style={styles.tableCell}>72 - 84</Text>
                </View>
            </View>
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
    },
    graph: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    table: {
        width: '100%',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    tableHeader: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    tableCell: {
        fontSize: 16,
    },
});

export default DatosPaciente;