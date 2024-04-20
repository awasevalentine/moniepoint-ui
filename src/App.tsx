import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './views/home/Home'
import CssBaseline from '@mui/material/CssBaseline';


function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path='' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
