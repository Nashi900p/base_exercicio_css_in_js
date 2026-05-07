import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container } from './styles' // Importação atualizada

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container> {/* Substituído: de <div className="container"> para <Container> */}
        <ListaVagas />
      </Container>
    </>
  )
}

export default App