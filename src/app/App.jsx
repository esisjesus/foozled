import { BrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { FoozledRouter } from '../routers'
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <FoozledRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App
