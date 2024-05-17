import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
