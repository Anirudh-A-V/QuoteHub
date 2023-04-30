import {useState, useEffect} from 'react'
import axios from 'axios'

import Navbar from '../Components/Navbar'
import Quote from '../Components/Quote'

const Home = () => {
    const [currentQuote, setCurrentQuote] = useState({
        id: '',
        quote: '',
        author: '',
        saved: false
    })
    const [tag, setTag] = useState('')
    const [tagList, setTagList] = useState([''])

    const fetchQuotes = async () => {
		if (tag == '') {
			await axios.get('https://api.quotable.io/random')
				.then(res => {
					setCurrentQuote(
						{
                            id: res.data._id,
							quote: res.data.content,
							author: res.data.author,
							saved: false
						}
					)
                    console.log(res.data)
					console.log(currentQuote)
				})
				.catch(err => {
					if (err.name === 'AbortError') {
						console.log('Fetch aborted');
					} else {
						console.log('Error: ', err);
					}
				})
		} else {
			await axios.get(`https://api.quotable.io/quotes?tags=${tag}&page=1`)
				.then(res => {
					let n = Math.floor(Math.random() * (res.data.count - 1));
					setCurrentQuote({
                        id: res.data.results[n]._id,
						quote: res.data.results[n].content,
						author: res.data.results[n].author,
						saved: false
					})
					console.log(res.data.results)
				})
				.catch(err => {
					if (err.name === 'AbortError') {
						console.log('Fetch aborted');
					} else {
						console.log('Error: ', err);
					}
				})
		}
	}

	const fetchTags = async () => {
		await axios.get('https://api.quotable.io/tags')
			.then(res => {
				let arr = ['']
				res.data.map((item) => arr.push(item.name));
				setTagList(arr);
			})
			.catch(err => {
				console.log('Error : ', err);
			})
	}

    useEffect(() => {
		fetchQuotes()
		fetchTags()
	}, [])

    return (
        <div className="App flex flex-col max-sm:min-h-screen min-h-screen w-full justify-start items-center">
            <Navbar bookmark={false}/>
            <div className='mt-[100px] mb-16 flex items-center justify-center w-full'>
                <Quote quote={currentQuote.quote} author={currentQuote.author} saved={currentQuote.saved} id={currentQuote.id} />
            </div>
            <div className='flex mb-10'>
                <select className='p-2 rounded-md min-w-max border-gray-300 focus:outline-none focus:ring focus:border-blue-300' value={tag} onChange={(e) => {
                    setTag(e.target.value)
                    console.log(e.target.value)
                }} >
                    {tagList.map((item, index) =>
                        <option value={item} key={index}>{item}</option>
                    )}
                </select>
            </div>
            <div className='flex items-center justify-center cursor-pointer pt-3 pb-3 pl-9 pr-9 bg-[#009C51] text-2xl font-normal text-white rounded-3xl hover:bg-green-600 mb-16 '
                onClick={fetchQuotes}
            >
                Next Quote
            </div>
        </div>
    )
}

export default Home