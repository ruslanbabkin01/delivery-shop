import styled from 'styled-components'

export const ProductsGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
`

export const ProductItem = styled.li`
  width: 280px;
  height: 300px;
  border: 1px solid ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
`
