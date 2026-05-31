import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { theme } from '../../utils/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  padding?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  shadow = 'sm',
  padding = 'md',
}) => {
  const paddingValue = {
    sm: theme.spacing.md,
    md: theme.spacing.lg,
    lg: theme.spacing.xl,
  }[padding];

  const shadowStyle = shadow === 'none' ? {} : (theme.shadows as any)[shadow];

  return (
    <View
      style={[
        styles.container,
        {
          padding: paddingValue,
          ...shadowStyle,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
});

export default Card;
