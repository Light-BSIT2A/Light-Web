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
            <p className='text-2xl p-4 w-3/5 mx-auto bg-peach text-dark-peach rounded-3xl'>
                &emsp;<strong>Peachy Core</strong> is a partnership between two BSIT2A students. They teamed up with the aim of 
                bringing convenience to students who are working hard to financially support themselves and/or
                their family.
            </p>
        </>
    );
}