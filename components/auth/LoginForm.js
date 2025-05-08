import React, { useState } from 'react';
import { HelperText, TextInput,Button  } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

// export default function LoginForm() {
const LoginForm = ({ onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validación de email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const hasEmailErrors = () => email.length > 0 && !isValidEmail(email);

  const handleLogin = () => {
    if (email && password) {
      onLogin({ email, password });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        error={hasEmailErrors()}
      />
      <HelperText type="error" visible={hasEmailErrors()} style={styles.component}>
        ¡El email no es válido!
      </HelperText >

      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        style={styles.component}
      />

      <Button 
        icon="account-lock-open" 
        mode="contained" 
        onPress={handleLogin}
        style={styles.boton}
      >
        Ingresar
      </Button>

      <Button 
        icon="account-edit" 
        mode="contained" 
        onPress={onSwitchToRegister}
        style={styles.boton}
      >
        Registrarse
      </Button>
    </View>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  component: {
   marginBottom: 10,
  },
  boton: {
    padding: 5,
    marginTop: 10,
  },
});
