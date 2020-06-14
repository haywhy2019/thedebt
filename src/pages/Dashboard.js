import React from 'react'

export default function Dashboard() {
    return (
        <div>
         <Admin />
        </div>
    )
}

const Admin = () => {
    return(
        <div className="container-fluid">
            <div className="row"> 
            <div className="col-md" style={{backgroundColor:"black"}}><h1>Hello</h1></div>
            <div className="col-md-10" style={{backgroundColor:"red"}}><h1>kool</h1></div>
            </div>

        </div>
    )
}