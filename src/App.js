import './App.css';
import Employee from './components/Employee';
function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees?
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
        :
        <p>you cannot see the employees</p>
      }
    </div>
  );
}

export default App;