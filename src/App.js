import React from 'react'
// easy indexing :)
import { Footer, /*Blog,*/ Education, HI3Tech, Experience, Header } from './container';
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
      <Education />
      { /* <Blog /> */ }
      <Footer />
    </div>
  )
}

export default App