import React from 'react'
import { Cards } from '../components/Cards'
import { Portada } from '../components/Portada'
import { Header } from '../components/Header'

export const Genres = () => {
    return (
        <>
            <section className="d-flex flex-column align-items-center gap-4">
                <div className="d-flex justify-content-center mb-2" style={{ width: "90%" }}>
                    <Header />
                </div>
                <div className="w-100 d-flex justify-content-center mb-2"  >
                    <Portada intro="¡Descubre la diversidad de géneros!" h1Portada="Explora sonidos que se adaptan a tu estilo" info="Navega por una amplia selección musical y encuentra géneros que conecten con tu energía y personalidad." description="Deja que cada ritmo defina tu experiencia" picture="./public/fondoGenres.jpg"/>
                </div>
                <div className="d-flex justify-content-between text-white" style={{ width: "90%" }}>
                    <p className="h5"> Catalogo </p>
                    <div className="rounded-pill bg-body-secondary bg-opacity-50 d-flex justify-content-center align-items-center">
                        <p className="m-0 px-3">See all</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-5" style={{ width: "90%" }} >
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/genre1.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/genre2.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/genre3.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/genre4.png"/> </div>
                    <div> <Cards Type="Album" Nombre="Nombre" Info="Info..." imgContent="./public/genre5.png"/> </div>
                </div>
            </section>
        </>
    )
}
