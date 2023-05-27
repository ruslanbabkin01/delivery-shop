import { useSelector } from 'react-redux'
import { Container, Header, StyledLink } from './SharedLayout.styled'
import { selectError, selectIsLoading } from '../../redux/selectors'
import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from '../Loader/Loader'

export default function SharedLayout() {
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to='/'>Shops Page</StyledLink>
          <StyledLink to='/order'>Shopping Cart</StyledLink>
          <StyledLink to='/history'>History orders</StyledLink>
        </nav>
      </Header>

      <main>
        {isLoading && <Loader />}
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  )
}
