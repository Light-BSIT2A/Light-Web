import './App.css';
import Employee from './components/Employee';
function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees?
        <>
          <Employee name="Kai" role="student"/>
          <Employee name="Sky"/>
          <Employee name="Joe"/>
        </>
        :
        <p>you cannot see the employees</p>
      }
    </div>
  );
}

export default App;