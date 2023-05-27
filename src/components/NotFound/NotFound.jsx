import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function NotFound() {
  return (
    <Box sx={{ my: 4 }}>
      <Title variant='h3' component='h1' sx={{ textAlign: 'center' }}>
        This page was not found, please return to <br />
        <Link style={{ color: '#5CD3A8' }} to='/'>
          {' '}
          Home page
        </Link>
      </Title>
    </Box>
  )
}

const Box = styled.div`
  margin: 30px 0px;
`

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`
