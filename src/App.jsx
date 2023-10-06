import { useState } from 'react'
import './App.css'
import { Layout } from './pages/Layout'
import { Home } from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default App
