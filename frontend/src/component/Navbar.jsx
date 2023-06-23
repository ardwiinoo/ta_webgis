import React from 'react'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10">
        <div className="navbar bg-primary px-5 pt-2">
          <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl text-white font-bold">
              Sistem Informasi Geografis Pemetaan Pondok Pesantren Bantul
            </a>
          </div>
          <div className="navbar-end">
            <a className="btn btn-success font-bold bg-blue-700 border-0 hover:bg-sky-700">Login</a>
          </div>
        </div>
      </div>
  );
}

export default Navbar;