import { Container, Header, StyledLink } from './SharedLayout.styled'

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to='/'>Shops Page</StyledLink>
          <StyledLink to='/order'>Shopping Cart</StyledLink>
          <StyledLink to='/history'>History orders</StyledLink>
        </nav>
      </Header>
    </Container>
  )
}
