import styled from 'styled-components'

export const LandingContainer = styled.div`
  .banner {
    width: 100vw;
    height: 80vh;
    background-image: url('./images/bg-landing.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .services {
    margin-top: 2rem;
    h1 {
      text-align: center;
      font-size: 4rem;
      position: relative;
      ::after {
        content: '';
        position: absolute;
        width: 35vw;
        height: 5px;
        top: 3rem;
        right: 6rem;
        background: ${({ theme }) => theme.colors.primary};
      }
      ::before {
        content: '';
        position: absolute;
        width: 35vw;
        height: 5px;
        top: 3rem;
        left: 6rem;
        background: ${({ theme }) => theme.colors.primary};
      }
    }
    .service-item {
      width: 364px;
      height: 364px;
      background: ${({ theme }) => theme.colors.background};
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding-top: 16px;
      padding-bottom: 16px;
      i {
        background-color: ${({ theme }) => theme.colors.primary};
        width: 64px;
        height: 64px;
      }
      h2 {
        text-align: center;
      }
      p {
        text-align: center;
        padding: 0 64px;
      }
    }
  }
`
export const ContentWrap = styled.div`
  max-width: 28%;
  height: 60%;
  margin-top: 6%;
  position: absolute;
  margin-left: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    font-size: 3.5rem;
  }
  p {
    color: ${({ theme }) => theme.colors.tertiaryText};
    font-size: 2rem;
  }
`;
