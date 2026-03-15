import React from 'react'
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
                    <Portada intro="¡Bienvenido a nuestra colección de canciones!" h1Portada="Encuentra canciones para cada momento" info="Explora miles de temas, descubre nuevos lanzamientos y disfruta tus canciones favoritas en un solo lugar." description="Vive la música que te acompaña todos los días" picture="./public/fondoSongs.jpg"/>
                </div>
                <div className="d-flex justify-content-between text-white" style={{ width: "90%" }}>
                    <p className="h5"> Catalogo </p>
                    <div className="rounded-pill bg-body-secondary bg-opacity-50 d-flex justify-content-center align-items-center">
                        <p className="m-0 px-3">See all</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-5" style={{ width: "90%" }} >
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/song1.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/song2.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/song3.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/song4.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/song5.png"/> </div>
                </div>
            </section>
        </>
    )
}
