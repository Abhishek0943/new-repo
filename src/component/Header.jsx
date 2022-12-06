import React from 'react'
import { FaSearch } from "react-icons/fa"
import '../style/header.css'
function Header() {
    return (
        <>
            <header>
                <nav className='nav'>
                    <div >
                        <h1 className='logo_con'>LOGO</h1>
                    </div>
                    <div className='search'>
                        <input id='input' type="search_i" placeholder='search' />
                        <div className='search_s'><FaSearch color="#2b4eff" backgroundColor="white"/></div>
                    </div>
                    <div className='contect'>
                        <button>
                            Log in
                        </button>
                        <button>
                            Sign up
                        </button>
                    </div>
                </nav>
                
            </header>
        </>
    )
}

export default Header
