import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return(
        <section className="bg-lightest-pink">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="https://github.com/U-CAN-Job-Search" target="_blank" rel="noreferrer" className="text-black">
                        <FontAwesomeIcon icon={faGithub} className="fa-2x"/>
                    </a>
                    <a href="mailto:ucan.jobsearch@gmail.com" rel="noreferrer" className="text-black">
                        <FontAwesomeIcon icon={faGoogle} className="fa-2x"/>
                    </a>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-black">
                    <span className="text-2xl">Stay Peachy</span>
                    <br/>
                    <span className="text-base"><strong>Peachy Core</strong></span>
                    <br/>
                    <span className="text-sm text-slate-800">
                        <strong>R. Mortiga & K. Yaneza Partnership</strong>
                        <br/>
                        BSIT 2A, ICS 
                        <br/>
                        Camarines Norte State College, Main Campus
                        <br/>
                        Daet, Camarines Norte
                    </span>
                </p>
            </div>
        </section>
    );
}