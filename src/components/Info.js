import { useState } from 'react';
import '../index.css';
export function InfoBox(props) {
    return(
        <div className='bg-lightest-peach p-3 w-4/5 mx-auto my-3 rounded-2xl'>
            {props.children}
        </div>
    );
}

export function Header(props){
    return(
        <h1 className='text-pink'>{props.children}</h1>
    );
}

export function Image(props){
    const [state, setState] = useState(false);
    function overlay(object){
        return(
            <button onClick={switchOverlay}>
                <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 bg-opacity-75 flex flex-col items-center justify-center">
                    {object}	
                </div>
            </button>
        );
    }
    function switchOverlay(){ setState(!state); }
    return(
        <>
            <button onClick={switchOverlay}>
                <img className = 'rounded-2xl inline-block m-3 w-[350px]' src={props.src} alt={props.alt}/>
            </button>
            {state?
                overlay(<img className = 'rounded-2xl inline-block m-3 w-3/5 opacity-100' src={props.src} alt={props.alt}/>)
            :
                null
            }
        </>
    )
}