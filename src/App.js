import React from 'react'
// easy indexing :)
import { Footer, Blog, Possibility, HI3Tech, Experience, Header } from './container';
import { CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Experience />
      <HI3Tech/>
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App