import { Link, Outlet } from "react-router-dom";
const Layout = ()=>{
    return<>
            <div><h1>Layout</h1></div>
            <Link to='/' style={{marginRight: "10px"}}><button  className="btn btn-info">Home</button></Link>
            <Link to='/h5/1' style={{marginRight: "10px"}}><button className="btn btn-info">H5</button></Link>
            <Link to='/form' style={{marginRight: "10px"}}><button className="btn btn-info">Form</button></Link>
            <Link to='/read'><button className="btn btn-info">API</button></Link>
            <div><Outlet /></div>
        </>
}

export default Layout;