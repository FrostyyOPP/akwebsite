import React from 'react'

export const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Backgrond PNG!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Collections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PNGs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Background</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Wallpaper</a>
        </li>
      
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
