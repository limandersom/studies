import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* PAGES */
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projcts'
import Project from './components/pages/Project'

/* Container, componente usado para estilizar o conteúdo. */
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
 
      <Navbar />

      {/* Container, componente usado para estilizar o conteúdo. */}
      <Container customClass="min-height"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}

export default App


/*
...:::: DEPENDÊCIAS ::::...
npm install json-server
npm install react-icons
npm install react-router-dom
npm install uuid

*/