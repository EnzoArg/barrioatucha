import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Image, View, Dimensions } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import LoginForm from './components/auth/LoginForm';
import { theme } from './theme/theme'; // Importá el tema

import AuthNavigator from './components/navigation/AuthNavigator';
import AppNavigator from './components/navigation/AppNavigator';
import Header from './components/Header';

const image = require('./assets/backend.png');
const logo = require('./assets/barrio_atucha_logo.png');

import properties from './mock/properties';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
   return (
  <SafeAreaProvider>
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <ImageBackground source={image} resizeMode="stretch" style={styles.background}>

           {isAuthenticated ? (
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Header 
                  title={isAuthenticated ? 'Reservas Premium' : 'Bienvenido'} 
                  onLogout={handleLogout}
                  showLogout={isAuthenticated}
                />
                <AppNavigator properties={properties} onLogout={handleLogout} />
              </View>
            ) : (
              <View>
                <View style={styles.logoContainer}>
                  <Image source={logo} style={styles.logo} />
                </View>
                <AuthNavigator onLoginSuccess={handleLoginSuccess} />
              </View>
            )}
        </ImageBackground>
      </SafeAreaView>
    </PaperProvider>
  </SafeAreaProvider>
 );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  logoContainer: { alignItems: 'center', marginBottom: 20 },
  logo: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default App;

// DONE
