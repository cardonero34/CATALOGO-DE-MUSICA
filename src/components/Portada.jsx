import "../stylesheets/Portada.css"

export const Portada = ({ intro, h1Portada, info, description, picture }) => {
    return (
        <>
            <div className="portada position-relative rounded-4 overflow-hidden" >
                <div className="position-absolute top-50 start-50 translate-middle w-75 h-75 d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-start align-items-start flex-column gap-3 text-light w-100">
                        <p className="h5">{intro}</p>
                        <p className="display-1 fw-bold">{h1Portada}</p>
                        <p>{info}</p>
                        <p className="h2">{description}</p>
                        <div className="d-flex gap-4">
                            <div className="d-flex align-items-center gap-2">
                                <div className="icon rounded-circle bg-white d-flex justify-content-center align-items-center">
                                    <img src="/play.svg" className="p-2" />
                                </div>
                                <p className="ps-1 m-0">Listen</p>
                            </div>
                            <div className="icon2 rounded-pill bg-black opacity-75 border border-white d-flex justify-content-center align-items-center">
                                <div className="d-flex align-items-center justify-content-center gap-2">
                                    <img src="/info.svg" className="img-fluid w-25 rounded-circle p-1" />
                                    <p className="pe-2 m-0">More info</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <img src={picture} className="object-fit-cover w-100 h-100" />
            </div>
        </>
    )
}
