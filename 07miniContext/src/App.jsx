

import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div>React</div>
    </UserContextProvider>
  )
}

export default App
