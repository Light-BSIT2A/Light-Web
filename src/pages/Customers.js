import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import AddCustomer from '../components/AddCustomer';
import { baseUrl } from '../shared';
export default function Customers(){
    const [customers, setCustomers] = useState();
    useEffect(() => {
        const url = baseUrl + 'api/customers/'
        fetch(url)
        .then((response) => response.json())
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
            //assume the add was succesful
            //hide modal
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
                    return <p key={customer.id}><Link to={'/customer/' + customer.id}>{customer.name}</Link></p>
                })
                :
                null
            }
            <AddCustomer newCustomer={newCustomer}/>
        </>
    )
}