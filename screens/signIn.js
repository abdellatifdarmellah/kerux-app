import React, { useCallback } from 'react';
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Stack, TextInput } from '@react-native-material/core';

SplashScreen.preventAutoHideAsync();

export default function SignIn () {
    const [fontsLoaded] = useFonts({
        'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
        'Lato-Semibold': require('../assets/fonts/Lato-Semibold.ttf'),
        'Lato-Medium': require('../assets/fonts/Lato-Medium.ttf'),
        'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),

    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={globalStyles.container} onLayout={onLayoutRootView}>
            <Text style={globalStyles.headerText}>Se connecter</Text>
            <Image source={require('../assets/icons/keruxLogo.png')} style={globalStyles.image}/>
            <Stack style={globalStyles.textInputStack}>
                <TextInput color='#7B170F' label='Email' style={globalStyles.textInputStyle}/>
                <TextInput color='#7B170F' label='Mot de passe' style={globalStyles.textInputStyle} />
            </Stack>
        </View>
            
    )
}