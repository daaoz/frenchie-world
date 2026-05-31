import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './navigation/MainNavigator';
import { theme } from './utils/theme';

const App: React.FC = () => {
  useEffect(() => {
    // Set status bar styling
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor(theme.colors.background);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background}
        translucent={false}
      />
      <MainNavigator />
    </SafeAreaProvider>
  );
};

export default App;
