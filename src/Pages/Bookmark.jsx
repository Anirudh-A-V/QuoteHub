import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from '../Components/Navbar'
import Quote from '../Components/Quote'
import { fetchQuotes } from '../store/quote/quoteSlice'

const Bookmark = () => {
    const quotes = useSelector(state => state.quote.quotes)
    const dispatch = useDispatch()
    console.log(quotes)

    useEffect(() => {
        dispatch(fetchQuotes());
    }, [dispatch]);

    return (
        <div className="App flex flex-col w-full justify-start items-center">
            <Navbar bookmark={true} />
            <div className='mt-14'></div>
            {quotes ?
                quotes.map((quote, index) => {
                    return (
                        <div className="flex flex-col justify-center items-center h-full w-full my-3" key={index}>
                            <Quote quote={quote.quote} author={quote.author} saved={quote.saved} id={quote.id} />
                        </div>
                    )
                })
                :
                <div className="flex flex-col justify-center items-center h-full w-full my-3">
                    <h2 className="text-3xl font-bold text-white">No Bookmarks</h2>
                </div>
            }
            <div className='mb-10'></div>
        </div>
    )
}

export default Bookmark