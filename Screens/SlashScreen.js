import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";

const SlashScreen = ({ navigation }) => {
    const scaleAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Inicia la animación de escala
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start(() => {
            // Navega a la pantalla Login después de que la animación se complete
            navigation.replace('Login');
        });
    }, [scaleAnim, navigation]);

    return (
        <View style={styles.container}>
            <Animated.Image source={require('../assets/images/multi2.png')} 
            style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
/>
        </View>
    );
};

export default SlashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black'
    },
    image: {
        width: 350,
        height: 350,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#16a085', // Color de la letra
      
    },
});
