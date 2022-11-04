import '../index.css';
import Teammate from '../components/Teammate';
export default function Team() {
    const team = [
        {
            id: 1,
            name: "Renze Mortiga",
            role: "BSIT2A",
            img: require("../components/ref/renze_pic2.jpg"),
            fb: "https://www.facebook.com/renzewithane",
            gm: "mailto:renzemeinard@gmail.com",
            ig: "https://instagram.com/renzewithane"
        },
        {
            id: 2,
            name: "Kai Yaneza",
            role: "BSIT2A",
            img:require("../components/ref/kai_pic2.jpg"),
            fb: "https://www.facebook.com/yanezakai",
            gm: "mailto:yanezalloydjemuel.sa@gmail.com",
            ig: "https://instagram.com/theskyler08"
        },
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