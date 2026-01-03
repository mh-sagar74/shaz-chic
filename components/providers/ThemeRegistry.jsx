"use client";

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#22223B',
      light: '#4A4E69',
      dark: '#1a1a2e',
      contrastText: '#F2E9E4',
    },
    secondary: {
      main: '#4A4E69',
      light: '#C9ADA7',
      dark: '#22223B',
      contrastText: '#F2E9E4',
    },
    background: {
      default: '#F2E9E4',
      paper: '#ffffff',
    },
    text: {
      primary: '#22223B',
      secondary: '#4A4E69',
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto), Arial, Helvetica, sans-serif',
    allVariants: {
      color: '#22223B',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          backgroundColor: '#22223B',
          color: '#F2E9E4',
          '&:hover': {
            backgroundColor: '#4A4E69',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#22223B',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#4A4E69',
          color: '#F2E9E4',
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
