import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

export const Read = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setLoading(false);
            });
    }, [data]);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <Link className="btn btn-warning mt-2" to="/add">ADD</Link>
            {data.map((t) => (
                <div key={t.id} style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <img src={t.avatar} alt={t.name} width={"100px"} />
                    <h3>{t.name}</h3>
                    <h3>{new Date(t.createdAt).toLocaleDateString()}</h3>
                    <Link to={`/read/${t.id}`}>See</Link>
                    <Link to={`/edit/${t.id}`} className="btn btn-dark" >EDIT</Link>
                    <button className="btn btn-danger" onClick={()=>{fetch(`${process.env.REACT_APP_API_URL}/${t.id}`,{method:"DELETE"})}}>DELETE</button>
                </div>
            ))}
        </>
    );
};

export const ReadID = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div key={data.id} style={{ marginTop: "10px", marginBottom: "10px" }}>
            <img src={data.avatar} alt={data.name} width="100px" />
            <h3>{data.name}</h3>
            <h3>{new Date(data.createdAt).toLocaleDateString()}</h3>
            <button className="btn btn-dark" onClick={() => nav(-1)}>Back</button>
        </div>
    );
};

export const Add = ()=>{
    const nav = useNavigate();
    const [data,setData] = useState({});
    return(
    <>
       <input type="text" placeholder="Name" onChange={(e)=>{setData({...data, name: e.target.value})}} required/> 
       <input type="text" placeholder="avatar" onChange={(e)=>{setData({...data, avatar: e.target.value})}} required/> 
       <input type="date" onChange={(e)=>{setData({...data, createdAt: e.target.value})}} required/>

       <button className="btn btn-success" onClick={()=>{
        fetch(`${process.env.REACT_APP_API_URL}`,{method: "POST",body:JSON.stringify(data), headers: {"Content-type":"application/json"}}).then((res)=>nav(-1))
       }}>ADD</button>
       {/* <input type="text" />  */}
    </>);
}

export const Edit = ()=>{
    const nav = useNavigate();
    const [data,setData] = useState({});
    
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return(
    <>
       <input type="text" value={data.name} placeholder="Name" onChange={(e)=>{setData({...data, name: e.target.value})}} required/> 
       <input type="text" value={data.avatar} placeholder="avatar" onChange={(e)=>{setData({...data, avatar: e.target.value})}} required/> 
       <input type="date" value={data.createdAt} onChange={(e)=>{setData({...data, createdAt: e.target.value})}} required/>

       <button className="btn btn-success" onClick={()=>{
        fetch(`${process.env.REACT_APP_API_URL}/${id}`,{method: "PUT",body:JSON.stringify(data), headers: {"Content-type":"application/json"}}).then((res)=>nav(-1))
       }}>ADD</button>
       {/* <input type="text" />  */}
    </>);
}

// export const Read = ()=>{
//     const [ data, setData ] = useState([]);

//     useEffect(()=>{
//         fetch(`${process.env.REACT_APP_API_URL}`).then((res)=>res.json()).then((res)=>setData(res));
//     },[])

//     const result = data.map((t) => (
//         <div key={t.id} style={{marginTop: "10px",marginBottom: "10px"}}>
//             <img src={t.avatar} alt={t.name} width={"100px"}/>
//             {/* <br /> */}
//             <h3>{t.name}</h3>
//             {/* <br /> */}
//             <h3>{t.createdAt}</h3>
//             {/* <br /> */}
//             <Link to={`/read/${t.id}`}>See</Link>
//             {/* <br /> */}
//         </div>
//     ));

//     return (
//         <>
//             {result}
//         </>
//     );
// }
