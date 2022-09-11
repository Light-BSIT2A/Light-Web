import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
function App() {
    const [role, setRole] = useState('dev');
    const [employees, setEmployees] = useState(
        [
            {
                name: "Kai",
                role: "Developer",
                img:"https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/299198461_763878828256886_3258026637235361374_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF4Ce5lT4BJmfsSpGjQr0C6D5Ea3vT2Mk8PkRre9PYyT3rcpRq03I9OxIucoBB4TqaXYihD4iYhIKoZ4Rif5Q0N&_nc_ohc=LYw9oqnKEpcAX81rltQ&_nc_ht=scontent.fmnl3-1.fna&oh=00_AT-lQfC_bFoPCULXB6BH3Tcp1RCABnc4Jt0vJbYBohQWAQ&oe=6321EB5F"
            },
            {
                name: "Joe Vandolf",
                role: "Q.A.",
                img:"https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/300174895_1919001741638159_2397683344678146118_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFXRbFHEIwCqk8ONxS75fSsiu8vlZZEglmK7y-VlkSCWU7q_mq1qQLTyYmpl3c3UjaWkVSn2T2FvQ-WzYOuOYiJ&_nc_ohc=2nu2HXGo_uoAX9CyA6I&tn=FrkvextFf4ecWuSX&_nc_ht=scontent.fmnl3-4.fna&oh=00_AT8POZ4FbSrTTmF0qqnFPyWFSdaRsbyU2p9eyrDytX6WdQ&oe=6322BEEC"
            },
            {
                name: "Ivan",
                role: "Sounds",
                img:"https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/218864817_1998495416970792_8148739620525660426_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH_UajQEqsMWGRXf8f_pxUOBtXApOZathcG1cCk5lq2F6NijVBYjYK8Yrgx9lcKdoBmj0aC7WmxPeMp5Qt0io9t&_nc_ohc=sguRvHpDB18AX_lLpEB&_nc_ht=scontent.fmnl3-1.fna&oh=00_AT85Azsp_qH_fvUgDxDBQN81UMSqkePpj_D4VdRWGJ92Pg&oe=63237529"
            },
            {
                name: "Cheryl",
                role: "UI",
                img:"https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/299431472_3230284290529695_8964183211029690991_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHjBoigw-Ra1ZraeOnNVd-tQwguWcdr5A9DCC5Zx2vkD4BMeeP0g_apcYyM3TrexZYvOATnyClJDCLFQCFqsKYy&_nc_ohc=wGs8y6IJoMkAX8OquXI&_nc_ht=scontent.fmnl3-4.fna&oh=00_AT9H_QfFPjsg_oF5COby72ZVlCZ7U8V64mKOyeUodqmD6A&oe=632301CE"
            },
            {
                name: "Chaser",
                role: "UX",
                img:"https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/292139542_754622295726388_7416791524836422093_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGxdpzNGzWULhnF0wuTDNdWtOM18f7KWVq04zXx_spZWnuueZCI-nAR-4vY2GdhiCyiA1eJxN_8GXv8Hd62nI1l&_nc_ohc=Y3j4RQTB9ZMAX_W3O08&_nc_ht=scontent.fmnl3-2.fna&oh=00_AT9JEE9WuAMwiZbkEI0Zd_AsByM9fUzVkCYkUf7vNjFSsw&oe=63233E6C"
            },
        ]
    );
    const showEmployees = true;
    return (
        <div className="App">
            {showEmployees?
                <>
                    <input type='text' onChange={(e)=>{
                    setRole(e.target.value)
                    }}/>
                    <div className="flex flex-wrap justify-center">
                        {employees.map((employee)=>{
                            return(
                                <Employee
                                    key={uuidv4()}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                />)
                        })}
                    </div>
                </>
                :
                <p>you cannot see the employees</p>
            }
        </div>
    );
}

export default App;