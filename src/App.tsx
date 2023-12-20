import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import AboutAuthor from './pages/AboutAuthor/AboutAuthor'
import AboutProject from './pages/AboutProject/AboutProject'
import Films from './pages/Films/Film'
import DetailedFilm from './pages/DetailedFilm/DetailedFilm'
import { NotFound } from './pages/NotFound/NotFound'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutProject />}/>
        <Route path="films" element={<Films />}/>
        <Route path="about_author" element={<AboutAuthor />}/>
        <Route path="films/:name" element={<DetailedFilm/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  </BrowserRouter> 
  )
}

export default App
