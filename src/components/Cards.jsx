import "../stylesheets/Cards.css"

export const Cards = ({ Type, Nombre, Info, imgContent }) => {
    return (
        <>
            <div className="cards position-relative rounded-4 overflow-hidden" >
                <img src={imgContent} className="object-fit-cover w-100 h-100" />
                <div className="cont position-absolute top-50 start-50 translate-middle d-flex flex-row justify-content-between p-3">
                    <div className="d-flex flex-column justify-content-end text-white">
                        <div className="rounded-pill bg-body-secondary bg-opacity-50 d-flex justify-content-center align-items-center mb-2" style={{ width: "fit-content" }}>
                            <p className="m-0 pb-1 px-3">{Type}</p>
                        </div>
                        <p className="fw-semibold m-0">{Nombre}</p>
                        <p className="opacity-50 m-0 pe-3">{Info}</p>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-items-end">
                        <div className="opt rounded-circle bg-body-secondary bg-opacity-50 d-flex justify-content-center align-items-center">
                            <img src="/points.svg" className="p-2" />
                        </div>
                        <div className="play rounded-circle bg-white d-flex justify-content-center align-items-center">
                            <img src="/play.svg" className="p-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
