import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../login/context/AuthProvider'
import { FoozledRouter } from '../routers'
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <FoozledRouter/>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
