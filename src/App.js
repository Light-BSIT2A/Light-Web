import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees?
        <>
        <input type='text' onChange={(e)=>{
          setRole(e.target.value)
        }}/>
          <Employee name="Kai" role="student"/>
          <Employee name="Sky" role={role}/>
          <Employee name="Joe"/>
        </>
        :
        <p>you cannot see the employees</p>
      }
    </div>
  );
}

export default App;