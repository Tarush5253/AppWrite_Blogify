import React from 'react';

function Logo({className='w-20'}){
    return (
        <div className={` ${className}`} >
            <img src={'../../blogify.png'} alt="Logo" />
        </div>
    )
}

export default Logo