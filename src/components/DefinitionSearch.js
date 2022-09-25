import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
export default function DefinitionSearch(){
    const [word, setWord] = useState('');
    const navigate = useNavigate();

    //useEffect(() => {let _ = word}, [word]);
    //no dependency array ---> update for any state change
    //empty dependency array --> execute once
    //dependancy array ---> updates for specified state change
    return (
        <form className="flex space-between space-x-2 max-w-[300px]"
            onSubmit={(e)=>{
                e.preventDefault();
                const tempWord = word;
                setWord('');
                navigate('/dictionary/'+tempWord);
                }}>
            <input value={word} className="shrink min-w-0 px-2 py-1 rounded" placeholder="Dinosaur" type='text' onChange={(e)=>{
                setWord(e.target.value);
            }}/>
            
            <button className='bg-purple-700 hover:bg-purple-900 text-black py-1 px-2 rounded'>Search</button>
        </form>
    )
}