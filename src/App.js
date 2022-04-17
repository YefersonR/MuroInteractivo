import './App.css';
import {Routes,Route} from "react-router-dom"
import {Home} from './components/Home';
import {Register} from './components/Register';
import {Login} from  './components/Login'
import {AuthProvider} from './authContext'
import { ProtectedRoute } from './ProtectedRoute';
import {RecoverPassword} from './components/RecoverPassword'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AuthProvider>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/recoverpassword' element={<RecoverPassword/>}/>

      </Routes>
      </AuthProvider>
      </header>
    </div>
  );
}

export default App;
