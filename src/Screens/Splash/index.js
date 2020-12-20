import React, { useEffect } from "react";
import { View, Image, StyleSheet, StatusBar, Text } from "react-native";


const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 2000);

    }, []);

    return (
        <View style={styles.main}>
            <StatusBar backgroundColor={'#ff76bb'} />

            <Image style={styles.logo} source={require('../../Assets/logo.jpg')} />

        </View>
    )
}

const styles = StyleSheet.create({
    main: { backgroundColor: '#F5F5F5', flex: 1, justifyContent: 'center', alignItems: 'center' },
    logo: { width: '100%', height: '100%', resizeMode: 'contain', },


})



export default Splash;