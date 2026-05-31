import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../utils/theme';

// Screens
import HomeScreen from '../screens/Home/HomeScreen';
import FrenchieProfileScreen from '../screens/Frenchie/FrenchieProfileScreen';
import HealthScreen from '../screens/Health/HealthScreen';
import FeedScreen from '../screens/Post/FeedScreen';
import HumanProfileScreen from '../screens/Profile/HumanProfileScreen';

const Tab = createBottomTabNavigator();

interface TabIconProps {
  label: string;
}

const TabIcon: React.FC<TabIconProps> = ({ label }) => (
  <Text style={{ fontSize: 20 }}>{label}</Text>
);

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarStyle: {
            backgroundColor: theme.colors.surface,
            borderTopColor: theme.colors.border,
            borderTopWidth: 1,
            paddingBottom: 8,
            paddingTop: 8,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 4,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <TabIcon label="🏠" />,
          }}
        />
        <Tab.Screen
          name="Frenchie"
          component={FrenchieProfileScreen}
          options={{
            tabBarLabel: 'Frenchie',
            tabBarIcon: () => <TabIcon label="🐕" />,
          }}
        />
        <Tab.Screen
          name="Health"
          component={HealthScreen}
          options={{
            tabBarLabel: 'Health',
            tabBarIcon: () => <TabIcon label="❤️" />,
          }}
        />
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{
            tabBarLabel: 'Feed',
            tabBarIcon: () => <TabIcon label="💬" />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HumanProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => <TabIcon label="👤" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
