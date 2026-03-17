
import { Cards } from '../components/Cards'
import { Portada } from '../components/Portada'
import { Header } from '../components/Header'

export const Songs = () => {
    return (
        <>
            <section className="d-flex flex-column align-items-center gap-4">
                <div className="d-flex justify-content-center mb-2" style={{ width: "90%" }}>
                    <Header />
                </div>
                <div className="w-100 d-flex justify-content-center mb-2"  >
                    <Portada intro="¡Bienvenido a nuestra colección de canciones!" h1Portada="Encuentra canciones para cada momento" info="Explora miles de temas, descubre nuevos lanzamientos y disfruta tus canciones favoritas en un solo lugar." description="Vive la música que te acompaña todos los días" picture="/fondoSongs.jpg"/>
                </div>
                <div className="d-flex justify-content-between text-white" style={{ width: "90%" }}>
                    <p className="h5"> Catalogo </p>
                    <div className="rounded-pill bg-body-secondary bg-opacity-50 d-flex justify-content-center align-items-center">
                        <p className="m-0 px-3">See all</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-5" style={{ width: "90%" }} >
                    <div> <Cards Type="Song" Nombre="Peach Eyes" Info="Canción suave de 'w2e', cálida y llena de nostalgia..." imgContent="/song1.png"/> </div>
                    <div> <Cards Type="Song" Nombre="Journey" Info="Canción de 'WOODZ' emotiva de cambio y crecimiento..." imgContent="/song2.png"/> </div>
                    <div> <Cards Type="Song" Nombre="Drums of Death" Info="Tema de 'FKA twigs' oscuro, intenso y experimental..." imgContent="/song3.png"/> </div>
                    <div> <Cards Type="Song" Nombre="Love Again" Info="Pop elegante de 'Dua Lipa' con energía romántica y vibrante..." imgContent="/song4.png"/> </div>
                    <div> <Cards Type="Song" Nombre="Pajarito Colibrí" Info="Canción de 'Natalia Lafourcade' delicada, poética y llena de ternura..." imgContent="/song5.png"/> </div>
                </div>
            </section>
        </>
    )
}
