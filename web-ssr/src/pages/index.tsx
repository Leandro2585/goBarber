import { Header } from '../components/Header'
import { LandingContainer } from '../styles/landing'
const Home: React.FC = () => {
  return (
    <LandingContainer>
      <Header/>
      <section>
        <h1>Agende o seu horário de maneira simples e fácil</h1>
        <p>Descubra os melhores barbeiros e cabelereiros em sua região</p>
        <button>Agendar agora</button>
      </section>
    </LandingContainer>
  )
}

export default Home
