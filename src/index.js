import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { sendToVercelAnalytics } from './vitals'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)

reportWebVitals(sendToVercelAnalytics)
