import { useState } from 'react';
const H1 = (props) => {
    const [count, setCount] = useState(0);
    const namesText = props.names.map((t) => `${t} ji`).join(', ')
    function updateCount(){
            setCount(count+1);
    }
    return (
        <>
            <button className='btn btn-info' onClick={updateCount}></button>
            {/* <button className='btn btn-info' onClick={()=>setCount(count+1)}></button> */}
            <h1>Hello {namesText} - {count}</h1>
            {props.isComputer ? <h3>Computer</h3> : <h3>Non-Computer</h3>}
        </>
    )
}


export const H5 = () => {
    return <h5>Hello From H5</h5>
}
// const H1 = (props) => {
//     const names = props.names.map((t) => <h3>{t}</h3> )
//     return <>
        
//         <h1>Hello {names}</h1>
//         {props.isComputer ? <h3>Computer</h3>:<h3>Non-Computer</h3>}
//         {/* {props.isComputer && <h3>Computer</h3>}
//         {!props.isComputer && <h3>Non-Computer</h3>} */}
//     </>
// }

export default H1;