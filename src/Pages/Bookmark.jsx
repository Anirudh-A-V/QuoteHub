import React from 'react'
import Navbar from '../Components/Navbar'
import Quote from '../Components/Quote'

const Bookmark = () => {
    return (
        <div className="App flex flex-col w-full justify-start items-center">
            <Navbar bookmark={true} />
            <div className='mt-14'></div>
            <div className="flex flex-col justify-center items-center h-full w-full my-3">
                <Quote quote='' author='' />
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full my-3">
                <Quote quote='' author='' />
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full my-3">
                <Quote quote='' author='' />
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full my-3">
                <Quote quote='' author='' />
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full my-3">
                <Quote quote='' author='' />
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full my-3">
                <Quote quote='' author='' />
            </div>
        </div>
    )
}

export default Bookmark