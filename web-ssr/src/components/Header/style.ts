import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  nav {
    height: 12vh;
    width: 30vw;
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      li {
        position: relative;
        font-size: 1.2rem;
        cursor: pointer;
        display: inline-block;
        padding-top: 4vh;
        text-align: center;
        width: 10rem;
        height: 100%;
        ::before {
          content: '';
          position: absolute;
          width: 0%;
          transition: width 0.2s;
          height: 8px;
          bottom: 0;
          left:0;
          background: ${({ theme }) => theme.colors.text};
          border-radius: 6px 6px 0px 0px;
        }
        :hover::before{
          width: 100%;
        }
      }
    }
  }
`
