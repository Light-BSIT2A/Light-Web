import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DefinitionSearch from '../components/DefinitionSearch';
import PageNotFound from '../components/PageNotFound';
import useFetch from '../hooks/useFetch';

export default function Definition(){
    //const [word, setWord] = useState();
    //const [notFound, setNotFound] = useState(false);
    //const [error, setError] = useState(false);
    let {search} = useParams();
    const [word, errorStatus] = useFetch(
        'https://api.dictionaryapi.dev/api/v2/entries/en/'+search
    );
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
        {word?.[0]?.meanings ?
            (
                <>
                    <DefinitionSearch/>
                    <h1>here is a definition: </h1>
                    {word[0].meanings.map((meaning)=>{
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