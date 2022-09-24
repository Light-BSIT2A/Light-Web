import { useState } from "react";
import { baseUrl } from "../shared";

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function login(e){
        e.preventDefault();
        const url = baseUrl + 'api/token/';
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                localStorage.setItem('access', data.access);
                localStorage.setItem('refresh', data.refresh);
                console.log(localStorage);
            })
            .catch();
    }
    return (
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
            <button className="mb-2 bg-purple-600 hover:bg-purple-800 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
        </form>
    )
}