import React, { useState } from 'react';
import { View } from 'react-native';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';

const AuthNavigator = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (credentials) => {
    // Aquí iría la lógica de autenticación real
    console.log('Login attempt with:', credentials);
    onLoginSuccess();
  };

  const handleRegister = (userData) => {
    // Aquí iría la lógica de registro real
    console.log('Register attempt with:', userData);
    onLoginSuccess();
  };

  return (
    <View>
      {isLogin ? (
        <LoginForm 
          onLogin={handleLogin} 
          onSwitchToRegister={() => setIsLogin(false)} 
        />
      ) : (
        <RegisterForm 
          onRegister={handleRegister} 
          onSwitchToLogin={() => setIsLogin(true)} 
        />
      )}
    </View>
  );
};

export default AuthNavigator;