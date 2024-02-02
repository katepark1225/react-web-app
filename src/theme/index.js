import { createTheme } from '@mui/material/styles'


const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#121212',
    },
  },
  customColors: {
    link: '#2196F3',
    helpText: '#757575',
    lightGray: '#eeeeee'
  },
})

export default theme
