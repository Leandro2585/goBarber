import { createGlobalStyle } from 'styled-components'
import { shade } from 'polished'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px 'Roboto Slab', sans-serif;
  }
  button {
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
    font-weight: bold;
    width: 386px;
    height: 82px;
    font-size: 1.75rem;
    :hover {
      background: ${shade(0.2,'#ff9000')}
    }
  }
`;
