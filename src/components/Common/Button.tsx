import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { theme } from '../../utils/theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({
    onPress,
    title,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    style,
    textStyle,
    icon,
    fullWidth = false,
  }, ref) => {
    const buttonStyles = getButtonStyles(variant, size, disabled, fullWidth);
    const textStyles = getTextStyles(variant, size);

    return (
      <TouchableOpacity
        ref={ref}
        onPress={onPress}
        disabled={disabled || loading}
        style={[buttonStyles.container, style]}
        activeOpacity={0.7}
      >
        {loading ? (
          <ActivityIndicator
            color={variant === 'outline' || variant === 'ghost' ? theme.colors.primary : theme.colors.surface}
            size={size === 'sm' ? 'small' : 'large'}
          />
        ) : (
          <>
            {icon}
            <Text style={[textStyles, textStyle]}>{title}</Text>
          </>
        )}
      </TouchableOpacity>
    );
  }
);

Button.displayName = 'Button';

function getButtonStyles(
  variant: ButtonVariant,
  size: ButtonSize,
  disabled: boolean,
  fullWidth: boolean
) {
  const baseStyle: ViewStyle = {
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm,
    width: fullWidth ? '100%' : 'auto',
  };

  const sizeStyle: ViewStyle = {
    sm: { paddingHorizontal: theme.spacing.md, paddingVertical: theme.spacing.sm },
    md: { paddingHorizontal: theme.spacing.lg, paddingVertical: theme.spacing.md },
    lg: { paddingHorizontal: theme.spacing.lg, paddingVertical: theme.spacing.lg },
  }[size];

  let variantStyle: ViewStyle = {};
  
  switch (variant) {
    case 'primary':
      variantStyle = {
        backgroundColor: disabled ? theme.colors.border : theme.colors.primary,
      };
      break;
    case 'secondary':
      variantStyle = {
        backgroundColor: disabled ? theme.colors.border : theme.colors.secondary,
      };
      break;
    case 'outline':
      variantStyle = {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: disabled ? theme.colors.border : theme.colors.primary,
      };
      break;
    case 'ghost':
      variantStyle = {
        backgroundColor: 'transparent',
      };
      break;
  }

  return {
    container: [baseStyle, sizeStyle, variantStyle],
  };
}

function getTextStyles(variant: ButtonVariant, size: ButtonSize): TextStyle {
  const fontSizes = {
    sm: theme.typography.fontSize.sm,
    md: theme.typography.fontSize.base,
    lg: theme.typography.fontSize.lg,
  };

  const textColor = variant === 'outline' || variant === 'ghost'
    ? theme.colors.primary
    : theme.colors.surface;

  return {
    color: textColor,
    fontSize: fontSizes[size],
    fontWeight: theme.typography.fontWeight.semibold,
  };
}

export default Button;
