import './App.css';
import {Routes,Route} from "react-router-dom"
import {Home} from './components/Home';
import {Register} from './components/Register';
import {Login} from  './components/Login'
import {AuthProvider} from './authContext'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </AuthProvider>
      </header>
    </div>
  );
}

export default App;
