
import { Cards } from '../components/Cards'
import { Portada } from '../components/Portada'
import { Header } from '../components/Header'

export const Albums = () => {
    return (
        <>
            <section className="d-flex flex-column align-items-center gap-4">
                <div className="d-flex justify-content-center mb-2" style={{ width: "90%" }}>
                    <Header />
                </div>
                <div className="w-100 d-flex justify-content-center mb-2"  >
                    <Portada intro="¡Bienvenido a nuestra colección de álbumes!" h1Portada="Descubre álbumes que marcan historias" info="Encuentra colecciones musicales únicas, organizadas para que disfrutes cada canción en su mejor contexto." description="Descubre obras que transforman la música en arte" picture="/fondoAlbums.jpg"/>
                </div>
                <div className="d-flex justify-content-between text-white" style={{ width: "90%" }}>
                    <p className="h5"> Catalogo </p>
                    <div className="rounded-pill bg-body-secondary bg-opacity-50 d-flex justify-content-center align-items-center">
                        <p className="m-0 px-3">See all</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-5" style={{ width: "90%" }} >
                    <div> <Cards Type="Album" Nombre="Preacher’s Daughter" Info="Álbum oscuro de 'Ethel Cain', intenso y profundamente emocional... " imgContent="/album1.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Cowboy Carter" Info="Una propuesta de 'Beyoncé' audaz con raíces country y soul..." imgContent="/album2.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Future Nostalgia (The Moonlight Edition)" Info="Pop brillante de 'Dua Lipa', bailable y lleno de energía retro..." imgContent="/album3.png"/> </div>
                    <div> <Cards Type="Album" Nombre="GOLDEN HOUR : Part.4" Info="Energía intensa de 'ATEEZ', estilo moderno y gran impacto visual..." imgContent="/album4.png"/> </div>
                    <div> <Cards Type="Album" Nombre="What Happened To The Heart?" Info="Álbum etéreo de 'AURORA', emotivo y lleno de sensibilidad..." imgContent="/album5.png"/> </div>
                </div>
            </section>
        </>
    )
}
