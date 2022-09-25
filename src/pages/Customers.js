import {useContext, useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { LoginContext } from '../App';
import AddCustomer from '../components/AddCustomer';
import useFetch from '../hooks/useFetch';
import { baseUrl } from '../shared';

export default function Customers(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    //const [customers, setCustomers] = useState();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    const toggleShow = () => setShow(!show);

    const url = baseUrl + 'api/customers/'
    const {
        data: {customers} = {},
        errorStatus} = useFetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access'),
        }
    });
    useEffect(()=>console.log(customers, errorStatus));
    /*useEffect(() => {
        const url = 
        fetch(url, {
            headers: 
        })
        .then((response) => {
            if(response.status === 401){
                setLoggedIn(false);
                navigate('/login', {
                    state:{
                        previousURL: location.pathname
                    }
                })
            }
            return response.json()
        })
        .then((data) => setCustomers(data.customers))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    */

    function newCustomer(name, industry){
        /*const data = {name: name, industry: industry};
        const url = baseUrl + 'api/customers/';
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then((data)=>{
            toggleShow();
            console.log()
            setCustomers([...customers, data.customer])
            //update list
        })
        .catch((e)=>{
            console.log(e);
        });*/
    }

    return (
        <>
            <h1>Customers: </h1>
            {customers ?
                customers.map((customer) => {
                    return <div key={customer.id}>
                                <Link
                                    className="m-2 block no-underline max-w-[300px] bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    to={'/customer/' + customer.id}
                                >
                                        {customer.name}
                                </Link>
                            </div>
                })
                :
                null
            }
            <AddCustomer newCustomer={newCustomer} show={show} toggle={toggleShow}/>
        </>
    )
}