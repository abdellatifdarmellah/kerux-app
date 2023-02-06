import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles }  from './styles/global';
import SignIn from './screens/signIn';
import { TextInput } from '@react-native-material/core';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <SignIn />
    </View>
  );
}

