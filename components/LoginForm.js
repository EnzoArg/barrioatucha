import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HelperText, TextInput,Button  } from 'react-native-paper';

export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Validación de email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const hasEmailErrors = () => email.length > 0 && !isValidEmail(email);

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
        onPress={() => console.log('Pressed')}
        style={styles.boton}
      >
        Ingresar
      </Button>
    </View>
  );
}

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
