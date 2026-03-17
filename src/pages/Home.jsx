
import { Cards } from '../components/Cards'
import { Portada } from '../components/Portada'
import { Header } from '../components/Header'

export const Home = () => {
    return (
        <>
            <section className="d-flex flex-column align-items-center gap-4">
                <div className="d-flex justify-content-center mb-2" style={{ width: "90%" }}>
                    <Header />
                </div>
                <div className="w-100 d-flex justify-content-center mb-2"  >
                    <Portada intro="¡Bienvenido a nuestro catálogo!" h1Portada="Escucha música sin límites" info="Explora nuestra selección de música" description="Descubre nuevas canciones, artistas, álbumes y géneros" picture="/fondoHome.jpg"/>
                </div>
                <div className="d-flex justify-content-between text-white" style={{ width: "90%" }}>
                    <p className="h5"> Catalogo </p>
                    <div className="rounded-pill bg-body-secondary bg-opacity-50 d-flex justify-content-center align-items-center">
                        <p className="m-0 px-3">See all</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-5" style={{ width: "90%" }} >
                    <div> <Cards Type="Song" Nombre="Marron" Info="Una balada intensa sobre recuerdos y amor..." imgContent="/home1.png" /> </div>
                    <div> <Cards Type="Album" Nombre="Brat" Info="Pop electrónico, rebelde y lleno de actitud..." imgContent="/home2.png" /> </div>
                    <div> <Cards Type="Artist" Nombre="Raye" Info="Voz intensa que mezcla pop, R&B y soul..." imgContent="/home3.png" /> </div>
                    <div> <Cards Type="Album" Nombre="Los Ángeles" Info="Flamenco íntimo, profundo y lleno de emoción..." imgContent="/home4.png" /> </div>
                    <div> <Cards Type="Album" Nombre="Solar Power" Info="Un álbum luminoso, relajado y natural..." imgContent="/home5.png" /> </div>
                </div>
            </section>
        </>
    )
}
