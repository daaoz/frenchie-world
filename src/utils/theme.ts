export const theme = {
  colors: {
    primary: '#9B7DB8',        // lavender purple
    secondary: '#E6D9F0',      // light lavender
    accent: '#F4A5D9',         // pink accent
    background: '#FAFBFC',     // nearly white
    surface: '#FFFFFF',        // white
    text: '#2D3142',           // dark text
    textSecondary: '#6B7280',  // gray text
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    border: '#E5E7EB',         // light gray
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 999,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  typography: {
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 28,
      '4xl': 32,
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 3,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.12,
      shadowRadius: 12,
      elevation: 6,
    },
  },
};

export type Theme = typeof theme;
