import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            </div>
            <a className="btn btn-ghost normal-case text-xl">SIGatren</a>
        </div>
        <div className="navbar-end">
            <a className="btn btn-success">Login</a>
        </div>
    </div>
  )
}

export default Navbar