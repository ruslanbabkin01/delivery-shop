import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1280px;
  padding: 0 16px;
  margin-top: 30px;
  margin-bottom: 30px;
`

export default function Container({ children }) {
  return <Wrapper>{children}</Wrapper>
}
