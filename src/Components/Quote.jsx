import { useState } from 'react'
import { BsFillBookmarkPlusFill, BsFillBookmarkCheckFill } from "react-icons/bs";

const Quote = (props) => {
    const [marked, setMarked] = useState(false)

    if (props.quote == '' || props.author == '') {
        return (
            <div className='bg-[#D05252] flex flex-col justify-center items-center h-full w-3/5 pt-9 pb-9 pr-12 pl-12 rounded-3xl'>
                <div className='text-3xl font-normal text-white flex-wrap text-justify'>
                    Loading...
                </div>
            </div>
        )
    }


    return (
        <div className='bg-[#D05252] flex flex-col justify-center items-center h-full w-3/5 pt-9 pb-9 pr-12 pl-12 rounded-3xl'>
            <div className='text-3xl font-normal text-white flex-wrap text-justify'>
                {props.quote}
            </div>
            <div className='flex items-center justify-between w-full mt-14'>
                <div></div>
                <div className='text-xl font-bold text-white'>
                    {props.author}
                </div>
                <div>
                    {marked ?
                        <BsFillBookmarkCheckFill className='text-xl text-white cursor-pointer' onClick={() => setMarked(!marked)} />
                        :
                        <BsFillBookmarkPlusFill className='text-xl text-white cursor-pointer' onClick={() => setMarked(!marked)} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Quote