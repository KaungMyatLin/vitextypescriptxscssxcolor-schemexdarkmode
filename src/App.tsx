import './App.css'
import './styles/main.scss'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Navbar from './components'

function App() {
  const { theme, togThemeHdl} = useContext(ThemeContext)
  return (
    <div className={theme}>
      <Navbar />
      <div className='background flex'>
        <h1 className='text'>hello</h1>
        <button onClick={togThemeHdl}>
          toggle
        </button>
      </div>
    </div>
  )
}

export default App
