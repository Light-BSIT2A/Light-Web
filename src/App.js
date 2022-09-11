import './index.css';
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
          <div className="flex flex-wrap justify-center">
            <Employee name="Kai" role="student" img="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/299198461_763878828256886_3258026637235361374_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF4Ce5lT4BJmfsSpGjQr0C6D5Ea3vT2Mk8PkRre9PYyT3rcpRq03I9OxIucoBB4TqaXYihD4iYhIKoZ4Rif5Q0N&_nc_ohc=LYw9oqnKEpcAX81rltQ&_nc_ht=scontent.fmnl3-1.fna&oh=00_AT-lQfC_bFoPCULXB6BH3Tcp1RCABnc4Jt0vJbYBohQWAQ&oe=6321EB5F"/>
            <Employee name="Sky" role={role} img="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/299198461_763878828256886_3258026637235361374_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF4Ce5lT4BJmfsSpGjQr0C6D5Ea3vT2Mk8PkRre9PYyT3rcpRq03I9OxIucoBB4TqaXYihD4iYhIKoZ4Rif5Q0N&_nc_ohc=LYw9oqnKEpcAX81rltQ&_nc_ht=scontent.fmnl3-1.fna&oh=00_AT-lQfC_bFoPCULXB6BH3Tcp1RCABnc4Jt0vJbYBohQWAQ&oe=6321EB5F"/>
            <Employee name="Joe" img="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/299198461_763878828256886_3258026637235361374_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF4Ce5lT4BJmfsSpGjQr0C6D5Ea3vT2Mk8PkRre9PYyT3rcpRq03I9OxIucoBB4TqaXYihD4iYhIKoZ4Rif5Q0N&_nc_ohc=LYw9oqnKEpcAX81rltQ&_nc_ht=scontent.fmnl3-1.fna&oh=00_AT-lQfC_bFoPCULXB6BH3Tcp1RCABnc4Jt0vJbYBohQWAQ&oe=6321EB5F"/>
            <Employee name="Vandolf" img="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/299198461_763878828256886_3258026637235361374_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF4Ce5lT4BJmfsSpGjQr0C6D5Ea3vT2Mk8PkRre9PYyT3rcpRq03I9OxIucoBB4TqaXYihD4iYhIKoZ4Rif5Q0N&_nc_ohc=LYw9oqnKEpcAX81rltQ&_nc_ht=scontent.fmnl3-1.fna&oh=00_AT-lQfC_bFoPCULXB6BH3Tcp1RCABnc4Jt0vJbYBohQWAQ&oe=6321EB5F"/>
            <Employee name="Ivan" img="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/299198461_763878828256886_3258026637235361374_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF4Ce5lT4BJmfsSpGjQr0C6D5Ea3vT2Mk8PkRre9PYyT3rcpRq03I9OxIucoBB4TqaXYihD4iYhIKoZ4Rif5Q0N&_nc_ohc=LYw9oqnKEpcAX81rltQ&_nc_ht=scontent.fmnl3-1.fna&oh=00_AT-lQfC_bFoPCULXB6BH3Tcp1RCABnc4Jt0vJbYBohQWAQ&oe=6321EB5F"/>
            <Employee name="Cheryl" img="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/299198461_763878828256886_3258026637235361374_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF4Ce5lT4BJmfsSpGjQr0C6D5Ea3vT2Mk8PkRre9PYyT3rcpRq03I9OxIucoBB4TqaXYihD4iYhIKoZ4Rif5Q0N&_nc_ohc=LYw9oqnKEpcAX81rltQ&_nc_ht=scontent.fmnl3-1.fna&oh=00_AT-lQfC_bFoPCULXB6BH3Tcp1RCABnc4Jt0vJbYBohQWAQ&oe=6321EB5F"/>
          </div>
        </>
        :
        <p>you cannot see the employees</p>
      }
    </div>
  );
}

export default App;