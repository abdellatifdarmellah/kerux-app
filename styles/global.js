import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 196,
      height: 196,
      position: 'absolute',
      top: 100
    },
    headerText: {
      position: 'absolute',
      top: 46,
      fontFamily: 'Lato-Bold',
      fontSize: 24,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      textAlign: 'center'
    },
    textInputStyle: {
      width: 320,
      height: 64,
      margin: 16,
      fontFamily: 'Lato-Semibold',
      fontSize: 18,
    },
    textInputStack: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  