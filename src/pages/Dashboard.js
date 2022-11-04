import { NavLink } from 'react-router-dom';

export default function Dashboard(){
    return(
        <>
            {/*Banner*/}
            <img
                src={require('../components/ref/Peachy Core Banner.png')}
                alt="Peachy Core Banner"
                className="w-3/5 mx-auto my-10"
            />
            {/*About*/}
            <p className='text-base p-4 w-5/6 mx-auto bg-peach text-dark-peach rounded-3xl md:w-3/5'>
                &emsp;&emsp;<strong>Peachy Core</strong> is a partnership between two BSIT-2A students. They teamed up with the aim of 
                bringing convenience to students and help with the common problems they face with the use of technologies &mdash; like websites.
                <br/><br/>
                &emsp;&emsp;Their first project as a team, U-CAN Job Search &mdash; Online, is aimed to helping those students who struggle financially and desires to look for jobs
                as a college student. To know more about this project, <NavLink key="Proposal" to={"/proposal"} className="no-underline text-pink">click here</NavLink>.
            </p>
        </>
    );
}