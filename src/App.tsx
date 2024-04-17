import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './views/home/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App