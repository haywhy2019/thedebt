import React from 'react'

export default function CustomeBtn({ children, ...otherprops}) {
    return (
        <div>
            <button className=""> 
            {children}
            </button>
        </div>
    )
}
