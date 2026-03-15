import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <nav className="navbar-expand-lg w-100 pt-4">
                <div className="w-100 d-flex justify-content-between">
                    <div className="collapse navbar-collapse rounded-start-2 overflow-hidden">
                        <ul className="navbar-nav bg-body-secondary bg-opacity-50 rounded-end-pill h-100 d-flex align-items-center gap-4 px-4">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/songs">Songs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/albums">Albums</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/artists">Artists</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/genres">Genres</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center gap-3">

                        <div className="d-flex justify-content-end h-100" style={{ width: "300px" }}>
                            <div className="collapse collapse-horizontal" id="collapseExample">
                                <form className="d-flex h-100" role="search">
                                    <input className="text-white rounded-pill bg-black opacity-75 border border-white d-flex justify-content-center align-items-center form-control me-3 ps-4" type="search" placeholder="______" />
                                </form>
                            </div>
                            <a className="pe-3 text-white text-decoration-none rounded-pill bg-black opacity-75 border border-white d-flex justify-content-center align-items-center" data-bs-toggle="collapse" href="#collapseExample">
                                <div className="icon d-flex justify-content-center align-items-center p-1">
                                    <img src="./public/search.svg" className="img-fluid m-2" />
                                </div>
                                Search
                            </a>
                        </div>
                        <div className="icon rounded-circle bg-black opacity-75 border border-white d-flex justify-content-center align-items-center p-1">
                            <img src="./public/notify.svg" className="img-fluid m-2" />
                        </div>
                        <div className="btn-group h-100">
                            <button type="button" className="btn btn-secondary rounded-start-pill d-flex align-items-center gap-2">
                                <div className="icon2 rounded-circle bg-white d-flex justify-content-center align-items-center p-1">
                                    <img src="./public/perfil.png" className="img-fluid" />
                                </div>
                                Usuario
                            </button>
                            <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
