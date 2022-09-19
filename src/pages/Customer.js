import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../shared' 

export default function Customer(){
    const { id } = useParams();
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        console.log('useEffect');
        const url = baseUrl + 'api/customers/' + id;
        fetch(url)
        .then((response) => {
            if(response.status === 404){
                setNotFound(true);
            }
            return response.json()
        })
        .then((data) => {
            setCustomer(data.customer)
        });
    }, []);
    return (
        <>
            {notFound? <p>the customer with the id {id} you are looking for is dead XD</p>
            :
                <>
                    {customer?
                        <>
                            <div>
                                <p>{customer.name}</p>
                                <p>{customer.industry}</p>
                            </div>
                            <Link to='/customer'>Go back</Link>
                        </>
                    :
                    null
                    }
                </>
            }
        </>
    )
}