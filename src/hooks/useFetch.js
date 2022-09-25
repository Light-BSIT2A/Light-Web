import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useFetch(url, { method, headers, body } = {}){
    const [data, setData] = useState();
    const [errorStatus, setErrorStatus] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    
    function request(){
        fetch(url, {
            method: method,
            headers: headers,
            body: body,
        })
            .then((response)=>{
                if (response.status === 401){
                    navigate('/login', {
                        state:{
                            previousURL: location.pathname
                        }
                    })
                }
                if (!response.ok){
                    throw(response.status);
                }
                return response.json()
            })
            .then((data)=>{
                setData(data);
            })
            .catch((e) => {
                setErrorStatus(e);
            })
    }
    function appendData(newData){
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newData),
        })
            .then((response)=>{
                if (response.sattus === 401){
                    navigate('/login', {
                        state:{
                            previousURL: location.pathname
                        }
                    })
                }
                if (!response.ok){
                    throw response.status;
                }
                return response.json();
            })
            .then((d)=>{
                const submitted = Object.values(d)[0];

                const newState = { ...data };
                Object.values(newState)[0].push(submitted);
                
                setData(newState);
            })
            .catch((e)=>{
                console.log(e);
                setErrorStatus(e);
            });
    }

    return {request, appendData, data, setData, errorStatus};
}