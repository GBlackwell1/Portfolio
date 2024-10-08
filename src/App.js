import React from 'react'
// easy indexing :)
import { Footer, Projects, Education, HI3Tech, Experience, Photography, Header, Youth4Youth } from './container';
import { Navbar, ChatComponent } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Experience />
      <ChatComponent />
      <HI3Tech/>
      <Projects />
      <Youth4Youth />
      <Photography />
      <Education />
      <Footer />
    </div>
  )
}

export default App