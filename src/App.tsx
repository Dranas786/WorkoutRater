import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar.tsx"

function App() {
  // Need to put container on the same line as return as it returns null or can put all in brackets but bracket 1 should be on same line
  return (
  <>
    <Navbar/>
    <Container className="mb-4">  
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Container>
  </>
  )
}

export default App
