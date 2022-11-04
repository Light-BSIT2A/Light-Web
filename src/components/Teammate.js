import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faGoogle } from "@fortawesome/free-brands-svg-icons"

export default function Teammate(props){
    return(
        <div className="min-w-[300px] max-w-[300px] m-2 mx-auto py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
                className="objectcover rounded-full h-[150px] w-[150px] block mx-auto rounded-full sm:mx-0 sm:shrink-0"
                src={props.img}
                alt={props.name+"'s pfp"}/>
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {props.name}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {props.role}
                    </p>
                </div>
                <div className="text-left text-medium">
                    Socials:
                </div>
                <div className="space-x-5">
                    <a href={props.fb} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebook} className="fa-2x text-pink"/></a>
                    <a href={props.gm} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGoogle} className="fa-2x text-pink"/></a>
                    <a href={props.ig} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} className="fa-2x text-pink"/></a>
                </div>
            </div>

        </div>
    )
}