import { Link } from "react-router-dom"

const Navbar = ({bookmark}) => {

    
    return (
        <div className="mt-10 top-0 flex w-full items-center justify-evenly sm:justify-between ">
            <div className={`text-2xl ${bookmark ? 'font-light' : 'font-extrabold'} text-white sm:ml-20 cursor-pointer`}>
                <Link to="/">
                    Home
                </Link>
            </div>
            <div className={`text-2xl ${bookmark ? 'font-extrabold' : 'font-light'} text-white sm:mr-20 cursor-pointer`}>
                <Link to="/bookmarks">
                    Bookmarks
                </Link>
            </div>
        </div>
    )
}

export default Navbar