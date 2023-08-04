import React from 'react'
// easy indexing :)
import { Footer, Projects, Education, HI3Tech, Experience, Header, Youth4Youth } from './container';
import { Navbar } from './components';
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
      <Projects />
      <Youth4Youth />
      <Education />
      <Footer />
    </div>
  )
}

export default App