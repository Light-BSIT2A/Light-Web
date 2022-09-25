import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddCustomer from '../components/AddCustomer';
import useFetch from '../hooks/useFetch';
import { baseUrl } from '../shared';

export default function Customers(){
    const [show, setShow] = useState(false);
    
    const toggleShow = () => setShow(!show);

    const url = baseUrl + 'api/customers/'
    const {
        request, appendData,
        data: {customers} = {},
        errorStatus} = useFetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access'),
        }
    });

    useEffect(()=>{
        request();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function newCustomer(name, industry){
        appendData({ name: name, industry:industry })

        if(!errorStatus){
            toggleShow();
        }
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