// theme/theme.js
import { MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#0A84FF',
    background: '#F3F4F6',
    surface: '#FFFFFF',
    text: '#1C1C1E',
    error: '#FF3B30',
    onSurface: '#000000',
  },
};
