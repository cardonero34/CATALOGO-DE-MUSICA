import React from 'react'   
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
                    <Portada intro="¡Bienvenido al mundo de los artistas!" h1Portada="Descubre el talento detrás de cada canción" info="Descubre artistas de diferentes estilos, conoce sus éxitos y explora su universo musical." description="Nuevos talentos y grandes íconos en un solo lugar" picture="./public/fondoArtists.jpg"/>
                </div>
                <div className="d-flex justify-content-between text-white" style={{ width: "90%" }}>
                    <p className="h5"> Catalogo </p>
                    <div className="rounded-pill bg-body-secondary bg-opacity-50 d-flex justify-content-center align-items-center">
                        <p className="m-0 px-3">See all</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-5" style={{ width: "90%" }} >
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/artist1.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/artist2.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/artist3.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/artist4.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/artist5.png"/> </div>
                </div>
            </section>
        </>
    )
}
