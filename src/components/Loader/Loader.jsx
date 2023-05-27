import { InfinitySpin } from 'react-loader-spinner'
import styled from 'styled-components'

export default function Loader() {
  ;<Box>
    <InfinitySpin width='200' color='#4fa94d' />
  </Box>
}

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
