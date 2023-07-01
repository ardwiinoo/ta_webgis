import React from 'react'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10">
        <div className="navbar bg-base-300 border-b-2 border-base-100 px-5 pt-2">
          <div className="navbar-start">
          <a href='http://localhost:3000/' className="btn btn-base-100 bg-base-300 normal-case lg:text-xl md:text-sm text-white font-bold truncate">
            SIG Pemetaan Pondok Pesantren Bantul
          </a>
          </div>
          <div className="navbar-end">
            <a className="btn font-bold bg-blue-500 border-0 text-white hover:bg-base-100">Login</a>
          </div>
        </div>
      </div>
  );
}

export default Navbar;