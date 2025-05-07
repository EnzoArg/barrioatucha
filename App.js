// App.js
import React from 'react';
import { ImageBackground, StyleSheet, Image, View, Dimensions } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import LoginForm from './components/LoginForm';
import { theme } from './theme/theme'; // Importá el tema

const image = require('./assets/backend.png');
const logo = require('./assets/barrio_atucha_logo.png');
const screenWidth = Dimensions.get('window').width;

const App = () => (
  <SafeAreaProvider>
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <LoginForm />
        </ImageBackground>
      </SafeAreaView>
    </PaperProvider>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { flex: 1, justifyContent: 'center' },
  logoContainer: { alignItems: 'center', marginBottom: 20 },
  logo: {
    width: screenWidth * 0.8,
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});

export default App;
