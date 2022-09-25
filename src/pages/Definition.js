import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DefinitionSearch from '../components/DefinitionSearch';
import PageNotFound from '../components/PageNotFound';
import useFetch from '../hooks/useFetch';

export default function Definition(){
    let {search} = useParams();
    const {request, data: [{meanings: word}] = [{}], errorStatus} = useFetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+search);
    
    useEffect(()=>{
        request();
        console.log(search);
    }, [search])
    
    if (errorStatus===404){
        return (
        <>
            <PageNotFound/>
            <Link to="/dictionary">Search another.</Link>
        </>
        );
    }
    else if (errorStatus){
        return (
        <>
            <p>Something went wrong.</p>
            <Link to="/dictionary">Search another.</Link>
        </>
        );
    }
    return(
    <>
        {word ?
            (
                <>
                    <DefinitionSearch/>
                    <h1>here is a definition: </h1>
                    {word.map((meaning)=>{
                        return (
                            <p key={uuidv4()}>
                                {meaning.partOfSpeech + ': '}
                                {meaning.definitions[0].definition}
                            </p>
                        );
                    })}
                </>
            )
        : null}
    </>
    );
}