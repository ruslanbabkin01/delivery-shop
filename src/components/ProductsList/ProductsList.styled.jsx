import styled from 'styled-components'

export const ProductsGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: 20px;
`

export const ProductItem = styled.li`
  width: 300px;
  height: 350px;
  border: 1px solid ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
`
