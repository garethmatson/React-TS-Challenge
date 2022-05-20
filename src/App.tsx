import React, { Component } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Movie from './pages/MovieDetails'
import './global.css'

/**
 * The starting page for your App
 */

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Header />
          <main>
            <section>
              <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/movie-detail/:id'} element={<Movie />} />
              </Routes>
            </section>
          </main>
        </HashRouter>
      </>
    )
  }
}

export default App
