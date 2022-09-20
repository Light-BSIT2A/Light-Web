import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../shared' 

export default function Customer(){
    const { id } = useParams();
    const [customer, setCustomer] = useState();
    const [tempCustomer, setTempCustomer] = useState();
    const [notFound, setNotFound] = useState(false);
    const [changed, setChanged] = useState(false);
    const [error, setError] = useState();

    const navigate = useNavigate();
    useEffect(() => {
        const url = baseUrl + 'api/customers/' + id;
        fetch(url)
        .then((response) => {
            if(response.status === 404){
                setNotFound(true);
            }
            if(!response.ok) throw new Error('Something went wrong :<')
            return response.json();
        })
        .then((data) => {
            setCustomer(data.customer);
            setTempCustomer(data.customer);
            setError(undefined)
        })
        .catch((e)=>{
            setError(e.message);
        });
    }, []);
    function updateCustomer(){
        const url = baseUrl + 'api/customers/' + id;
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tempCustomer)
        })
        .then((response) => {
            if (!response.ok) throw new Error('Something went wrong :<')
            return response.json()
        })
        .then((data) => {
            setChanged(false);
            setCustomer(data.customer)
            setError(undefined)
        })
        .catch((e) => {
            setError(e.message);
        });
    }
    const changeDetect = (name = tempCustomer.name, industry = tempCustomer.industry) => (name === customer.name)&&(industry === customer.industry)?setChanged(false):setChanged(true);
    return (
        <>
            {notFound? <p>the customer with the id {id} you are looking for is dead XD</p>
            :
                <>
                    {customer?
                        <>
                            <div>
                                <input
                                    class="m-2 block px-2"
                                    type="text"
                                    value={tempCustomer.name}
                                    onChange={(e)=>{
                                        setTempCustomer({...tempCustomer, name:e.target.value})
                                        changeDetect(e.target.value, undefined)
                                    }}
                                />
                                <input
                                    class="m-2 block px-2"
                                    type="text"
                                    value={tempCustomer.industry}
                                    onChange={(e)=>{
                                        setTempCustomer({...tempCustomer, industry:e.target.value})
                                        changeDetect(undefined, e.target.value)
                                    }}
                                />
                                {changed?
                                    <>
                                        <button className = 'm-2' onClick={(e) => {
                                            setTempCustomer({...customer})
                                            setChanged(false)
                                        }}>Cancel</button>
                                        <button className = 'm-2' onClick={updateCustomer}>Save</button>
                                    </>
                                :
                                null}
                            </div>
                            <button onClick={(e) => {
                                const url = baseUrl + 'api/customers/'+id
                                fetch(url, {method: 'DELETE', headers:{
                                    'Content-Type': 'application/json'
                                }})
                                .then((response)=>{
                                    if (!response.ok){
                                        throw new Error('Something went wrong!');
                                    }
                                    setError(undefined);
                                    navigate('/customer');
                                    //assume things went well ;D
                                })
                                .catch((e)=>{
                                    setError(e.message)
                                })
                            }}>Delete</button>
                        </>
                    :
                    null
                    }
                    {error?<p>{error}</p>:null}
                    <br/>
                    <Link to='/customer'>Go back</Link>
                </>
            }
        </>
    )

}