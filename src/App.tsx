import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"

function App() {
  // Need to put container on the same line as return as it returns null
  return <Container>  
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/store" element={<Store />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  </Container>
}

export default App
