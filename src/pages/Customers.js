import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import AddCustomer from '../components/AddCustomer';
import { baseUrl } from '../shared';
export default function Customers(){
    const [customers, setCustomers] = useState();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const toggleShow = () => setShow(!show);

    useEffect(() => {
        const url = baseUrl + 'api/customers/'
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            }
        })
        .then((response) => {
            if(response.status === 401){
                navigate('/login')
            }
            return response.json()
        })
        .then((data) => setCustomers(data.customers))
    }, []);

    function newCustomer(name, industry){
        const data = {name: name, industry: industry};
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
        });
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