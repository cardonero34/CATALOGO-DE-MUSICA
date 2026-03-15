import { Home } from "./pages/Home"
import './App.css'
import { Songs } from "./pages/Songs"
import { Albums } from "./pages/Albums"
import { Artists } from "./pages/Artists"
import { Genres } from "./pages/Genres"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/genres" element={<Genres />} />
         </Routes>
      </BrowserRouter>
    </>
  )
}