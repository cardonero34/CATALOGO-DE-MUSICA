  
import { Cards } from '../components/Cards'
import { Portada } from '../components/Portada'
import { Header } from '../components/Header'

export const Artists = () => {
    return (
        <>
            <section className="d-flex flex-column align-items-center gap-4">
                <div className="d-flex justify-content-center mb-2" style={{ width: "90%" }}>
                    <Header />
                </div>
                <div className="w-100 d-flex justify-content-center mb-2"  >
                    <Portada intro="¡Bienvenido al mundo de los artistas!" h1Portada="Descubre el talento detrás de cada canción" info="Descubre artistas de diferentes estilos, conoce sus éxitos y explora su universo musical." description="Nuevos talentos y grandes íconos en un solo lugar" picture="/fondoArtists.jpg"/>
                </div>
                <div className="d-flex justify-content-between text-white" style={{ width: "90%" }}>
                    <p className="h5"> Catalogo </p>
                    <div className="rounded-pill bg-body-secondary bg-opacity-50 d-flex justify-content-center align-items-center">
                        <p className="m-0 px-3">See all</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-5" style={{ width: "90%" }} >
                    <div> <Cards Type="Artist" Nombre="Dua Lipa" Info="Pop moderno con fuerza, estilo y elegancia..." imgContent="/artist1.png"/> </div>
                    <div> <Cards Type="Artist" Nombre="Evanescence" Info="Rock intenso con emoción, fuerza y dramatismo..." imgContent="/artist2.png"/> </div>
                    <div> <Cards Type="Artist" Nombre="Lana Del Rey" Info="Melancolía, glamour y una esencia cinematográfica..." imgContent="/artist3.png"/> </div>
                    <div> <Cards Type="Artist" Nombre="St. Vincent" Info="Arte alternativo con actitud, riesgo y estilo..." imgContent="/artist4.png"/> </div>
                    <div> <Cards Type="Artist" Nombre="Keshi" Info="Sonido suave, íntimo y lleno de emoción..." imgContent="/artist5.png"/> </div>
                </div>
            </section>
        </>
    )
}
