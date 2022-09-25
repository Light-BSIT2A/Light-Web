import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { baseUrl } from '../shared';

export default function Customer(){
    const { id } = useParams();
    const [tempCustomer, setTempCustomer] = useState();
    const [notFound, setNotFound] = useState(false);
    const [changed, setChanged] = useState(false);
    const navigate = useNavigate();
    const url = baseUrl + 'api/customers/' + id;
    const { request, updateData, deleteData,
        data:{customer} = {},
        errorStatus} = useFetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access'),
        }
    });

    useEffect(() => {
        request();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(()=>{
        if (errorStatus === 404){
            setNotFound(true)
        };
        if (customer) setTempCustomer(customer);
    }, [errorStatus, customer]);

    function updateCustomer(e){
        e.preventDefault();
        updateData(tempCustomer);
        setChanged(false);
    }
    const changeDetect = (name = tempCustomer.name, industry = tempCustomer.industry) => {(name === customer.name)&&(industry === customer.industry)?setChanged(false):setChanged(true);}
    return (
        <div className='p-3'>
            {notFound?
                <p>the customer with the id {id} you are looking for is dead XD</p>
            :
                <>
                    {customer?
                        <>
                            <div>
                                <form id='customer' onSubmit={updateCustomer} className="w-full max-w-sm">
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/3">
                                            <label
                                                className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                for="customerName">Customer Name:</label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input
                                                className="block px-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                id = "customerName"
                                                type="text"
                                                value={tempCustomer?.name ? tempCustomer.name:customer.name}
                                                onChange={(e)=>{
                                                    setTempCustomer({...tempCustomer, name:e.target.value})
                                                    changeDetect(e.target.value, undefined)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center mb-6">
                                        <div className="md:w-1/3">
                                            <label
                                                className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                for="industry">Industry:</label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                id="industry"
                                                type="text"
                                                value={tempCustomer?.industry ? tempCustomer.industry:customer.industry}
                                                onChange={(e)=>{
                                                    setTempCustomer({...tempCustomer, industry:e.target.value})
                                                    changeDetect(undefined, e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </form>
                                {changed?
                                    <>
                                        <button
                                            className="mr-2 bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            onClick={(e) => {
                                            setTempCustomer({...customer})
                                            setChanged(false)
                                        }}>Cancel</button>
                                        <button
                                            form = 'customer'
                                            className="mb-2 bg-purple-600 hover:bg-purple-800 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            >Save</button>
                                    </>
                                :
                                null}
                            <div>
                                <button
                                    onClick={(e) => {
                                        deleteData({doAfterDelete:()=>navigate('/customer')})
                                    }}
                                    className="bg-gray-400 hover:bg-gray-500 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >Delete</button>
                            </div>
                        </div>
                    </>
                    :
                    null
                    }
                    {errorStatus?<p>{errorStatus}</p>:null}
                    <br/>
                </>
            }
            
            <Link
                to='/customer'
                className = "no-underline bg-purple-600 hover:bg-purple-800 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Go back
            </Link>
        </div>
    )
}