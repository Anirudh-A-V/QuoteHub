import { Link } from "react-router-dom"

const Navbar = ({bookmark}) => {

    
    return (
        <div className="mt-10 top-0 flex w-full items-center justify-between ">
            <div className={`text-2xl ${bookmark ? 'font-light' : 'font-extrabold'} text-white ml-20 cursor-pointer`}>
                <Link to="/">
                    Home
                </Link>
            </div>
            <div className={`text-2xl ${bookmark ? 'font-extrabold' : 'font-light'} text-white mr-20 cursor-pointer`}>
                <Link to="/bookmarks">
                    Bookmarks
                </Link>
            </div>
        </div>
    )
}

export default Navbar