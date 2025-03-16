
import { Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './components/pages/LoginPage'
import { Route } from 'react-router-dom'
import SignUpPage from './components/pages/SignUpPage'
import TransactionsPage from './components/pages/TransactionsPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
    </Routes>
  )
}

export default App
