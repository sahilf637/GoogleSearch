import Navbar from './components/navbar'
import Search from './components/search'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='GoogleImage'><img src="/Goog.png" alt="Google" /></div>
      <Search/>
    </div>
  )
}

export default App
