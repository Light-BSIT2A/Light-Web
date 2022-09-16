import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
export default function Dictionary(){
    const [word, setWord] = useState('');
    const navigate = useNavigate();

    useEffect(() => {let _ = word}, [word]);
    //no dependency array ---> update for any state change
    //empty dependency array --> execute once
    //dependancy array ---> updates for specified state change
    return (
        <>
            <input type='text' onChange={(e)=>{
                setWord(e.target.value);
            }}/>
            
            <button onClick={() => {
                navigate('/definition/'+word, {replace: true})
            }}>Search</button>
        </>
    )
}