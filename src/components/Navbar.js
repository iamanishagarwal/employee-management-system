import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="https://www.logic-square.com">
          <img
            src="https://res.cloudinary.com/www-logic-square-com/image/upload/v1551945805/ls-logo.png"
            className="ls-logo"
            alt="LS Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#0">
                Page Name
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
