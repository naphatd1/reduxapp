import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material'
import { Toaster } from 'react-hot-toast';


import theme from './theme.tsx'
import router from './routes/root.tsx';
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store.ts';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>

  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
    <Toaster position='bottom-right' />
  </ThemeProvider>
  </Provider>
)
