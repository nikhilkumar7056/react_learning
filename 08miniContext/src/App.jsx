
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Compnents/Login'
import Profile from './Compnents/profile'

function App() {

  return (
   <UserContextProvider>
    <h1>hello and welcome in context API</h1>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
