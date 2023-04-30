import { useEffect, useState } from 'react'
import { BsFillBookmarkPlusFill, BsFillBookmarkCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';

import { addQuote, removeQuote } from '../store/quote/quoteSlice';

const Quote = (props) => {
    const dispatch = useDispatch()
    const quoteList = useSelector(state => state.quote.quotes)
    const [marked, setMarked] = useState(props.saved)

    useEffect(() => {
        console.log(props.saved)
        setMarked(props.saved)
    }, [props.quote])

    if (props.quote == '' || props.author == '') {
        return (
            <div className='bg-[#D05252] flex flex-col justify-center items-center h-full w-3/5 pt-9 pb-9 pr-12 pl-12 rounded-3xl'>
                <div className='text-3xl font-normal text-white flex-wrap text-justify'>
                    Loading...
                </div>
            </div>
        )
    }

    const handleBookmark = () => {
        if (marked) {
            console.log(quoteList)
            dispatch(removeQuote(props.id))
            setMarked(false)
        } else {
            console.log(quoteList)
            dispatch(addQuote({ id: props.id, quote: props.quote, author: props.author, saved: true }))
            setMarked(true)
        }
    }


    return (
        <div className='bg-[#D05252] max-sm:w-[90vw] flex flex-col justify-center items-center h-full w-3/5 pt-9 pb-9 pr-12 pl-12 rounded-3xl'>
            <div className='text-3xl font-normal text-white flex-wrap max-sm:text-left max-sm:text-2xl text-justify'>
                {props.quote}
            </div>
            <div className='flex items-center justify-between w-full mt-14'>
                <div></div>
                <div className='text-xl max-sm:text-lg font-bold text-white'>
                    - {props.author}
                </div>
                <div onClick={handleBookmark}>
                    {marked ?
                        <BsFillBookmarkCheckFill className='text-xl text-white cursor-pointer'/>
                        :
                        <BsFillBookmarkPlusFill className='text-xl text-white cursor-pointer'/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Quote