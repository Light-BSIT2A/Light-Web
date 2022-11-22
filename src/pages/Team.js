import '../index.css';
import Teammate from '../components/Teammate';
export default function Team() {
    const team = [
        
    ]

    return (
        <>
            <div className='mx-auto w-4/5 text-center'>
                <h1>Meet the team!</h1>
                {team.map((employee)=>{
                    return(
                        <Teammate
                            key={employee.id}
                            id={employee.id}
                            name={employee.name}
                            role={employee.role}
                            img={employee.img}
                            fb={employee.fb}
                            gm={employee.gm}
                            ig={employee.ig}
                        />
                    )
                })}
            </div>
        </>
    );
}