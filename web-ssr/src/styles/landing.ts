import styled from 'styled-components'

export const LandingContainer = styled.div`
  section {
    width: 100vw;
    height: 80vh;
    background-image: url('./images/bg-landing.png');
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
      font-size: 3rem;
      max-width: 448px;
    }
    p {
      color: ${({ theme }) => theme.colors.tertiaryText};
      font-size: 1.5rem;
    }
  }
`
