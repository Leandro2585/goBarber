import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  nav {
    ul {
      list-style: none;
      li {
        height: 100%;
        padding: 2rem;
        font-size: 1.3rem;
        width: 10rem;
        display: inline-block;
        cursor: pointer;
        text-align: center;
        &:hover::before {
          content: '';
          position: absolute;
          top: 0;
          transform: translateX(-1.5rem);
          height: 10px;
          width: 100px;
          align-self: center;
          background: ${({ theme }) => theme.colors.text};
          border-radius: 0px 0px 64px 64px;
        }
      }
    }
  }
`;
