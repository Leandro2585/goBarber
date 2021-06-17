import { HeaderContainer } from './style'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src="/svgs/logo.svg" alt=""/>
      <nav>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
