import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles.jsx'
import { theme } from './styles/theme'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store.js'
import Loader from './components/Loader/Loader.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyles />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
    <ToastContainer autoClose={2000} />
  </React.StrictMode>
)
