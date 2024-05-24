import Dashboard from '@/layouts/Dashboard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import './App.css';

import Overview from '@/pages/Overview';
import Ticket from '@/pages/Ticket';
import { palette } from '@/theme/palette';
import { Route, Routes } from 'react-router-dom';
import { customShadows } from './theme/custom-shadows';

const theme = createTheme({
  palette: {
    ...palette,
    mode: 'light', // You can change this to 'dark' if needed
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: ['Nunito', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    fontWeightBold: 700,
  },
  customShadows: customShadows('light'), // Pass the mode here
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {/* <ProtectedRoute path="/"> */}
        <Dashboard>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/tickets" element={<Ticket />} />
          </Routes>
        </Dashboard>
        {/* </ProtectedRoute> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
