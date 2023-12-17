import Navbar from './components/navbar'
import Search from './components/search'
import Middle from './components/middle'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='GoogleImage'><img src="/Goog.png" alt="Google" /></div>
      <Search/>
      <Middle/>
    </div>
  )
}

export default App
