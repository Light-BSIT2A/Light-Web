import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginContext } from "../App";
import useFetch from "../hooks/useFetch";
import { baseUrl } from "../shared";


export default function Register(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useContext(LoginContext);

    const url = baseUrl + 'api/register/';
    const {createData, data, errorStatus} = useFetch(url, {
                                                    method: 'POST',
                                                    headers:{
                                                        'Content-Type': 'application/json'
                                                    }
                                                });
    function login(e){
        let errorEncountered = false;
        e.preventDefault();
        if (/\s/.test(username)){
            errorEncountered = true;
            setError('Spaces in username is not allowed.');
        } else {
            if (!username){
                setError('Input username.');
            } else if (!email){
                setError('Input email.');
            } else if (!password){
                setError('Input password.');
            }
        }
        if (!errorEncountered){
            createData({
                username: username,
                email: email,
                password: password,
            });
        }
    }
    useEffect(()=>{

        if (data){
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            setLoggedIn(true)
            navigate(location?.state?.previousURL ? location.state.previousURL : '/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, errorStatus])
    return (
        !loggedIn?
            <form id='customer' onSubmit={login} className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                            for="username">Username:</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="block px-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id = "username"
                            type="text"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                            for="email">Email:</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="block px-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id = "email"
                            type="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label
                            className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                            for="password">Password:</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                </div>
                {error?
                    <p
                        className="m-2 text-red-500 p-2"
                    >
                        {error}
                    </p>
                :
                    null
                }
                <button
                    className="mb-2 bg-purple-600 hover:bg-purple-800 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Register
                </button>
            </form>
        :
            <>
                <h1>You are currently logged in. Creating an account will log you out.</h1>
                <button
                    className="mb-2 bg-gray-200 hover:bg-gray-400 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={(e)=>{
                        setLoggedIn(false);
                        navigate('/register');
                    }}
                >
                    Continue
                </button>
                <button
                    className="mx-2 mb-2 bg-purple-600 hover:bg-purple-800 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={navigate(location?.state?.previousURL ? location.state.previousURL : '/')}
                >
                    Cancel
                </button>
            </>
    )
}