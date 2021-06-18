import { Header } from '../components/Header'
import { ContentWrap, LandingContainer } from '../styles/landing'
const Home: React.FC = () => {
  return (
    <LandingContainer>
      <Header/>
      <section className="banner">
        <ContentWrap>
          <h1>Agende o seu horário de maneira simples e fácil</h1>
          <p>Descubra os melhores barbeiros e cabelereiros em sua região</p>
          <button>Agendar agora</button>
        </ContentWrap>
      </section>
      <section className="services">
        <h1>Serviços</h1>
        <div className="service-item">
          <i></i>
          <h2>Cortes de cabelo</h2>
          <p>Cortes de cabelo com os melhores cabeleireiros da sua região</p>
        </div>
      </section>
    </LandingContainer>
  )
}

export default Home
