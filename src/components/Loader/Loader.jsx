import { InfinitySpin } from 'react-loader-spinner'
import styled from 'styled-components'

export default function Loader() {
  return (
    <Box>
      <InfinitySpin width='320' color='#4fa94d' />
    </Box>
  )
}

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
